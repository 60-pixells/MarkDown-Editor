import React, { useContext } from "react";
import { MarkDownContext } from "../context/MarkDownContext";
import ReactMarkdown from 'react-markdown'

var Remarkable = require('remarkable');

function MarkdownSanitized(){
    const {initState, disptach} = useContext(MarkDownContext);
    return (
        <div className="mark-down">
            <ReactMarkdown>
                {initState.rawInput}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownSanitized;