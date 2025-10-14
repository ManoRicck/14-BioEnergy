import { chatbotPrompt } from '@/app/helpers/constants/chatbot-prompt'
import { MessageArraySchema } from '@/lib/validators/message'
import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from '@/lib/openai-stream'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const parsedMessages = MessageArraySchema.parse(messages)

    const outboundMessages: ChatGPTMessage[] = parsedMessages.map((m) => ({
      role: m.isUserMessage ? 'user' : 'system',
      content: m.text,
    }))

    outboundMessages.unshift({
      role: 'system',
      content: chatbotPrompt,
    })
    
  const payload: OpenAIStreamPayload = {
    model: 'llama-3.1-8b-instant',
    messages: outboundMessages,
    temperature: 0.7,
    top_p: 1,
    max_tokens: 512,
    stream: true,
  }

    const stream = await OpenAIStream(payload)
    return new Response(stream)
  } catch (err) {
    console.error('❌ Erro:', err)
    return new Response(JSON.stringify({ error: 'Erro ao gerar resposta' }), { status: 500 })
  }
}