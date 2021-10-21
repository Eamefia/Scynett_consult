export const initialState = {
    frameone: [],
    frametwo: [],
    framethree: [],
    framefour: [],
    framefive: [],
    framesix: [],
    frameseven: [],
    frameeight: [],
    frameten: [],
}

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type) {
        case "ADD_T0_FRAMEONE":
            return { ...state, frameone: [...state.frameone, action.item] };
        /*case "ADD_T0_FRAMETWO":
            return { state, frametwo: [...state.frame, action.item] };
        case "ADD_T0_FRAMETHREE":
            return { state, framethree: [...state.frame, action.item] };
        case "ADD_T0_FRAMEFOUR":
             return { state, framefour: [...state.frame, action.item] };
        case "ADD_T0_FRAMEFIVE":
            return { state, framefive: [...state.frame, action.item] };
        case "ADD_T0_FRAMESIX":
            return { state, framesix: [...state.frame, action.item] };
        case "ADD_T0_FRAMESEVEN":
            return { state, frameseven: [...state.frame, action.item] };
        case "ADD_T0_FRAMEEIGHT":
            return { state, frameeight: [...state.frame, action.item] };
        case "ADD_T0_FRAMETEN":
            return { state, frameten: [...state.frame, action.item] }; */
        default:
            return state;
    }
}

export default reducer;