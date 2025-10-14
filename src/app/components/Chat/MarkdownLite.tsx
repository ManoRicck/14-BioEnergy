import Link from 'next/link';
import React, { FC } from 'react';

interface MarkdownLiteProps {
    text: string;
}

const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
    const linkRegex = /\[(.+?)\]\((.+?)\)/g;
    const boldRegex = /\*\*(.+?)\*\*/g;
    
    // Divide o texto em linhas individuais
    const lines = text.split('\n');
    
    return (
        <div className="space-y-2">
            {lines.map((line, index) => {
                if (!line.trim()) return null;

                const parts = [];
                let lastIndex = 0;
                let match;

                // Processa links
                while ((match = linkRegex.exec(line)) !== null) {
                    const [fullMatch, linkText, linkUrl] = match;
                    const matchStart = match.index;
                    const matchEnd = matchStart + fullMatch.length;

                    if (lastIndex < matchStart) {
                        parts.push(line.slice(lastIndex, matchStart));
                    }

                    parts.push(
                        <Link 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='break-words underline underline-offset-2 text-green-600'
                            key={linkUrl}
                            href={linkUrl}
                        >
                            {linkText}
                        </Link>
                    );

                    lastIndex = matchEnd;
                }

                if (lastIndex < line.length) {
                    parts.push(line.slice(lastIndex));
                }

                // Processa negrito nas partes
                const processedParts = parts.map((part, partIndex) => {
                    if (typeof part !== 'string') return part;

                    const boldParts = [];
                    let boldLastIndex = 0;
                    let boldMatch;

                    while ((boldMatch = boldRegex.exec(part)) !== null) {
                        const [fullMatch, boldText] = boldMatch;
                        const matchStart = boldMatch.index;
                        const matchEnd = matchStart + fullMatch.length;

                        if (boldLastIndex < matchStart) {
                            boldParts.push(part.slice(boldLastIndex, matchStart));
                        }

                        boldParts.push(
                            <strong key={`bold-${index}-${partIndex}-${matchStart}`} className="font-bold">
                                {boldText}
                            </strong>
                        );

                        boldLastIndex = matchEnd;
                    }

                    if (boldLastIndex < part.length) {
                        boldParts.push(part.slice(boldLastIndex));
                    }

                    return boldParts.length > 0 ? boldParts : part;
                });

                return (
                    <div key={index}>
                        {processedParts}
                    </div>
                );
            })}
        </div>
    );
}

export default MarkdownLite;













// import Link from 'next/link';
// import React, { FC } from 'react';

// interface MarkdownLiteProps {
//     text: string;
// }

// const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
//     const linkRegex = /\[(.+?)\]\((.+?)\)/g;
//     const boldRegex = /\*\*(.+?)\*\*/g;
    
//     // Divide o texto em parágrafos baseado em números seguidos de ponto
//     const paragraphs = text.split(/(?=\d+\.)/);
    
//     return (
//         <div className="space-y-4">
//             {paragraphs.map((paragraph, index) => {
//                 if (!paragraph.trim()) return null;

//                 const parts = [];
//                 let lastIndex = 0;
//                 let match;

//                 // Processa links
//                 while ((match = linkRegex.exec(paragraph)) !== null) {
//                     const [fullMatch, linkText, linkUrl] = match;
//                     const matchStart = match.index;
//                     const matchEnd = matchStart + fullMatch.length;

//                     if (lastIndex < matchStart) {
//                         parts.push(paragraph.slice(lastIndex, matchStart));
//                     }

//                     parts.push(
//                         <Link 
//                             target='_blank' 
//                             rel='noopener noreferrer'
//                             className='break-words underline underline-offset-2 text-blue-600'
//                             key={linkUrl}
//                             href={linkUrl}
//                         >
//                             {linkText}
//                         </Link>
//                     );

//                     lastIndex = matchEnd;
//                 }

//                 if (lastIndex < paragraph.length) {
//                     parts.push(paragraph.slice(lastIndex));
//                 }

//                 // Processa negrito nas partes
//                 const processedParts = parts.map((part, partIndex) => {
//                     if (typeof part !== 'string') return part;

//                     // Substitui hífens por bullet points • e adiciona quebra de linha
//                     const partWithBullets = part.replace(/ - /g, '\n• ');

//                     const boldParts = [];
//                     let boldLastIndex = 0;
//                     let boldMatch;

//                     while ((boldMatch = boldRegex.exec(partWithBullets)) !== null) {
//                         const [fullMatch, boldText] = boldMatch;
//                         const matchStart = boldMatch.index;
//                         const matchEnd = matchStart + fullMatch.length;

//                         if (boldLastIndex < matchStart) {
//                             boldParts.push(partWithBullets.slice(boldLastIndex, matchStart));
//                         }

//                         boldParts.push(
//                             <strong key={`bold-${index}-${partIndex}-${matchStart}`} className="font-bold">
//                                 {boldText}
//                             </strong>
//                         );

//                         boldLastIndex = matchEnd;
//                     }

//                     if (boldLastIndex < partWithBullets.length) {
//                         boldParts.push(partWithBullets.slice(boldLastIndex));
//                     }

//                     return boldParts.length > 0 ? boldParts : partWithBullets;
//                 });

//                 return (
//                     <div key={index}>
//                         {processedParts.flat().map((part, i) => {
//                             if (typeof part === 'string' && part.includes('\n')) {
//                                 // Se tiver quebras de linha, divide e renderiza com <br />
//                                 const lines = part.split('\n');
//                                 return lines.map((line, lineIndex) => (
//                                     <React.Fragment key={`${i}-${lineIndex}`}>
//                                         {lineIndex > 0 && <br />}
//                                         {line}
//                                     </React.Fragment>
//                                 ));
//                             }
//                             return <React.Fragment key={i}>{part}</React.Fragment>;
//                         })}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default MarkdownLite;
