import { marked } from 'marked';

export default async function markdownToHtml(markdown: string): Promise<String> {
  const htmlContent = marked(markdown);
  return htmlContent;
}
