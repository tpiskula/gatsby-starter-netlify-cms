import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => 
{
  console.log(entry.getIn(['data', 'body']))
  return (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)};

export default BlogPostPreview;
