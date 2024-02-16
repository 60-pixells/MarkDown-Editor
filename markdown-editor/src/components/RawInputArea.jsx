import React, { useContext, useEffect} from "react";
import { MarkDownContext } from "../context/MarkDownContext";
import useLocalStorage from "../hooks/useLocalStorage";

function RawInputArea(){
    const {initState, disptach} = useContext(MarkDownContext);
    const [rawInput, setRawInput] = useLocalStorage("rawinput",initState.rawInput);
    function handleTextAreaChange(evt) {
        evt.preventDefault();
        const updatedText = evt.target.value;
        disptach({
            type: "RAW_INPUT",
            message: updatedText
        });
        setRawInput(updatedText);
    }
    useEffect(() => {
        console.log("the raw data is", rawInput)
        disptach({
            type: "RAW_INPUT",
            message: rawInput
        })
    }, [])
    return (
        <div className="raw-input">
            <textarea
             value={rawInput}
             className="text-area"
             onChange={(e) => handleTextAreaChange(e)}
            />
        </div>
    )
}

export default RawInputArea;