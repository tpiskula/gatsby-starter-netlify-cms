import React from 'react';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import raw from 'rehype-raw;
import unified from 'unified';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => 
{
  const markdownContent = entry.getIn(['data', 'body']);

  var processor = unified()
  .use(markdown)
  .use(remark2rehype, {allowDangerousHTML: true})
  .use(raw);

  const content = processor.parse(markdownContent);
  console.log(content);
  return (
  <BlogPostTemplate
    content={content}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)};

export default BlogPostPreview;
