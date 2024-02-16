const markDownReducer = (state, action) => {
    switch(action.type){
        case "RAW_INPUT":
            const obj = {
                ...state,
                rawInput: action.message
            };
            return obj;
        case "SET_MARK_DOWN":
            const markObj = {
                ...state,
                markDownSanitized: action.message
            }
            return markObj;
    }
}

export default markDownReducer;