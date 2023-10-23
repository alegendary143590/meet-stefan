import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownDisplayProps {
  markdownContent: string;
}

const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({ markdownContent }) => {

  return (
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  );
};

export default MarkdownDisplay;