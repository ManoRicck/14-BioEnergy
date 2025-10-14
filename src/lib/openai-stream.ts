import { createParser, ParsedEvent, ReconnectInterval } from 'eventsource-parser'

export type ChatGPTAgent = 'user' | 'system'

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: string
}

export interface OpenAIStreamPayload {
  model: string
  messages: ChatGPTMessage[]
  temperature: number
  top_p: number
  // frequency_penalty: number
  // presence_penalty: number
  max_tokens: number
  stream: boolean
  // n: number
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  let counter = 0

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === 'event') {
          const data = event.data
          if (data === '[DONE]') {
            controller.close()
            return
          }
          try {
            const json = JSON.parse(data)
            const text = json.choices[0].delta?.content || ''
            
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return
            }
            
            const queue = encoder.encode(text)
            controller.enqueue(queue)
            counter++
          } catch (e) {
            controller.error(e)
          }
        }
      }

      const parser = createParser(onParse)

      const reader = res.body?.getReader()
      if (!reader) {
        throw new Error('Failed to get reader from response body.')
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        parser.feed(decoder.decode(value))
      }

    },
  })

  return stream
}