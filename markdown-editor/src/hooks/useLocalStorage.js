import React, { useEffect, useState } from "react";

function getCurrentValue(key, initValue) {
    const savedValue = JSON.parse(localStorage.getItem(key)) || "";
    if(!savedValue || savedValue === "undefined") {
        return initValue;
    } else {
        return savedValue
    }
}


export default function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(() => {
        return getCurrentValue(key, initValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}