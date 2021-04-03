import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import './index.less';
import 'react-markdown-editor-lite/lib/index.css';
// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

function Todo(props: any) {
  const { onChange } = props;

  const onInput = (html: string, text: string) => {
    onChange(text, html);
  };

  return (
    <MdEditor
      style={{ height: '550px' }}
      renderHTML={(text: string) => mdParser.render(text)}
      onChange={({ html, text }: any) => onInput(html, text)}
    />
  );
}

export default Todo;
