import React from 'react';
import rehypeReact from "rehype-react";
import Counter from "./Counter";
import Youtube from './Youtube';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 
    "interactive-counter": Counter,
    "youtube-player": Youtube,
  },
 }).Compiler;

export default ({ content, className }) => <div className={className}>{content}</div>;

export const HTMLContent = ({ content, className }) => (<div className={className}>{renderAst(content)}</div>);
