import React from 'react';
import rehypeReact from 'rehype-react';
import Counter from "../components/Counter";
import Youtube from '../components/Youtube';

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
      "interactive-counter": Counter,
      "youtube-player": Youtube,
    },
   }).Compiler;

export default renderAst;