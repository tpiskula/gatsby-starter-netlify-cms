import React from 'react';
import renderAst  from '../cms/renderAst';

export default ({ content, className }) => <div className={className}>{content}</div>;

export const HTMLContent = ({ content, className }) => {
 return (<div className={className}>{renderAst(content)}</div>);
}
