// import { useEffect } from 'react';
// import mermaid from 'mermaid';
//
// export const UseMermaid = (content?: string) => {
//     useEffect(() => {
//         // Initialize Mermaid
//         mermaid.initialize({ startOnLoad: true });
//
//         // Select all elements with the class `mermaid`
//         const mermaidElements = document.querySelectorAll<HTMLElement>('.mermaid');
//
//         mermaidElements.forEach((el, index) => {
//             const id = `mermaid-diagram-${index}`;
//             el.setAttribute('id', id);
//
//             // Render each Mermaid diagram in place
//             mermaid.render(id, el.textContent || '', (svgCode: string) => {
//                 el.innerHTML = svgCode;
//             });
//         });
//     }, [content]); // Re-run effect when `content` changes
// };