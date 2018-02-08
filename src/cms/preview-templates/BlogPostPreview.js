import React from 'react';
import markdown from 'remark-parse';
import toHAST from 'mdast-util-to-hast'
import unified from 'unified';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => 
{
  const markdownContent = entry.getIn(['data', 'body']);
  
  var remark = unified()
  .use(markdown);
  
  const mdAst = remark.parse(markdownContent);
  console.log('mdast',mdAst);
  
  const htmlAst = toHAST(mdAst, { allowDangerousHTML: true })
  console.log('htmlAst',htmlAst);
  
  return (
  <BlogPostTemplate
    content={htmlAst}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)};

export default BlogPostPreview;
