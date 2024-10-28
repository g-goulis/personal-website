"use client";

import markdownStyles from "../markdown-styles.module.css";
import ReactMarkdown, {Components} from 'react-markdown';
import remarkGfm from "remark-gfm";
import {useEffect} from "react";
import mermaid from "mermaid";

type Props = {
    content: string;
};

export function PostBody({ content }: Props) {

    useEffect(() => {
        mermaid.initialize({ startOnLoad: false}); // Initialize Mermaid but don’t auto-render
    }, []);

    const renderers: Partial<Components> = {
        code: (({ node, className, children, ...props }) => {
            // Extract language from className
            const language = className ? className.replace("language-", "") : "";

            if (language === 'mermaid') {
                useEffect(() => {
                    mermaid.contentLoaded(); // Render Mermaid diagrams only on the client
                }, [children]); // Re-run when content updates

                return <div className="mermaid" suppressHydrationWarning>{String(children)}</div>;
            }

            return (
            <div className={className}>
                <code>{children}</code>
            </div>
            );
        }),
    };

    return (
        <div className="max-w-2xl mx-auto">
            <ReactMarkdown
                className={markdownStyles["markdown"]}
                children={content}
                remarkPlugins={[remarkGfm]}
                components={renderers}

            />
        </div>
    );
}