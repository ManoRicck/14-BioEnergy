import { AccordionContent, AccordionTrigger } from '@/components/ui/accordion'
import { Accordion, AccordionItem } from '@radix-ui/react-accordion'
import { FC } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

const Chat: FC = () => {
    return (
        <Accordion 
            type='single' 
            collapsible 
            className='relative bg-white z-40 shadow'>
                <AccordionItem value='item-1'>
                    <div className='fixed right-8 w-90 bottom-8 bg-[#09090A] border border-[#252525] rounded-[8px] overflow-hidden'>
                        <div className='w-full h-full flex flex-col'>
                            <AccordionTrigger className='px-6 border-b border-[#252525]'>
                                <ChatHeader />
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col h-90'>
                                    <ChatMessages className='px-2 py-3 flex-1'/>
                                    <ChatInput className='px-4'/>
                                </div>
                            </AccordionContent>
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>
    )
}

export default Chat