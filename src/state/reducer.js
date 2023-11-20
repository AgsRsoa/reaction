import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from "./types";

export const initialState = {
    messages: [], 
    username:'anonymous', 
    reactionsMap : {}
};

const REACTION_TYPES = REACTION_OBJECTS.map((REACTION_OBJECT)=>{
   return REACTION_OBJECT.type
});

//update the reducer
const reducer = (state,action) =>{
    //update the reactions map
    if(REACTION_TYPES.includes(action.type)){
        let reactionsMap;
        const {messageId} = action.item; //reaction object id
        //then check if an array for this messageId exists in the state.reactionsMap
        const messageReactions = state.reactionsMap[messageId];

        if(messageReactions){
            reactionsMap = {
                ...state.reactionsMap,
                [messageId]: [...messageReactions,action.item]
            } 
        }else{
            //si l'array n'existe pas 
            reactionsMap = {
                ...state.reactionsMap,
                [messageId]: [action.item]
            }
        }

        return {...state, reactionsMap}

    }
    switch(action.type){
        case NEW_MESSAGE:
        return {...state, messages: [...state.messages, action.item]}
        default:
            return state;
        case SET_USERNAME:
            return{...state, username: action.username}
    }
}

export default reducer;