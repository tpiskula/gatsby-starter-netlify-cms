import markdown from 'remark-parse';
import raw from 'rehype-raw';
import toHAST from 'mdast-util-to-hast'
import unified from 'unified';

export default function mdToHast(markdownContent) {
    var remark = unified()
    .use(markdown);
  
    const mdAst = remark.parse(markdownContent);
  
    const htmlAst = toHAST(mdAst, { allowDangerousHTML: true })
  
    const content = unified().use(raw).runSync(htmlAst);

    return content;
}