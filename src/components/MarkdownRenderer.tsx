import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
    content: string;
}

const Markdown: React.FC<Props> = ({content}) => {
    return (
        <ReactMarkdown>{content}</ReactMarkdown>
    );
};

export default Markdown;
