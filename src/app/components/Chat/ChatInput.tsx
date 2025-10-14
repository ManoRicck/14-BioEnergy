"use client";

import { MessagesContext } from '@/context/messages';
import { cn } from '@/lib/utils';
import { Message } from '@/lib/validators/message';
import { useMutation } from '@tanstack/react-query';
import { CornerDownLeft, Loader2 } from 'lucide-react';
import { nanoid } from 'nanoid';
import { FC, HTMLAttributes, useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import TextareaAutosize from "react-textarea-autosize";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {
  customProp?: never;
}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>('')
  const {
    messages, 
    addMessage, 
    removeMessage, 
    updateMessage, 
    setIsMessageUpdating
  } = useContext(MessagesContext)

  const textareaRef = useRef<null | HTMLTextAreaElement>(null)

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (_message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      return response.body
    },
    onMutate(message) {
      addMessage(message)
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error('Nenhum fluxo encontrado')

        const id = nanoid()
        const responseMessage: Message = {
          id,
          isUserMessage: false,
          text: '',
        }

        addMessage(responseMessage)

        setIsMessageUpdating(true)

        const reader = stream.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
          const {value, done: doneReading} = await reader.read()
          done = doneReading
          const chunkValue = decoder.decode(value)
          updateMessage(id, (prev) => prev + chunkValue)
        }

        // clean up
        setIsMessageUpdating(false)
        setInput('')

        setTimeout(() => {
          textareaRef.current?.focus()
        }, 10)
    },
    onError(_, message) {
      toast.error('Algo deu errado. Por favor, tente novamente.')
      removeMessage(message.id)
      textareaRef.current?.focus()
    } 
  });

  return (
    <div {...props} className={cn('border-t border-[#252525]', className)}>
      <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
        <TextareaAutosize
          ref={textareaRef}
          rows={2}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input.trim(),
              };

              if (message.text) sendMessage(message);
            }
          }}
          maxRows={4}
          disabled={isLoading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder='Digite sua mensagem...'
          className='peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-[#181818] py-1.5 text-gray-300 focus:ring-0 text-sm sm:leading-6'
        />

        <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
          <kbd className='inline-flex items-center rounded border bg-gray-50 border-black px-1 font-sans text-xs text-gray-900'>
            {isLoading ? ( 
              <Loader2 className='w-3 h-3 animate-spin' />
            ) : (
              <CornerDownLeft className='w-3 h-3' />  
            )}
          </kbd>
        </div>

        <div aria-hidden='true' className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-green-600'/>
      </div>
    </div>
  );
};

export default ChatInput;