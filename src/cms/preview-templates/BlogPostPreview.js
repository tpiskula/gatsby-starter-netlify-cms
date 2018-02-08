import React from 'react';
import mdToHast from '../mdToHast';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => 
{
  return (
  <BlogPostTemplate
    content={mdToHast(entry.getIn(['data', 'body']))}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)};

export default BlogPostPreview;
