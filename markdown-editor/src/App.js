import React from "react";
import "./App.css"
import RawInputArea from "./components/RawInputArea";
import MarkdownSanitized from "./components/MarkdownSanitized";
import MarkDownContextProvider from "./context/MarkDownContext";

function App() {
    return (
        <MarkDownContextProvider>
            <div className="main-container">
                <RawInputArea />
                <MarkdownSanitized />
            </div>
        </MarkDownContextProvider>
    )
}


export default App;