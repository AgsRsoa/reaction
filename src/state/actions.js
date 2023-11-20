import {NEW_MESSAGE,  SET_USERNAME} from './types';
import uuid from 'uuid/v4';

export const newMessage = ({text, username}) =>{
    return {
        type: NEW_MESSAGE,
        item:{id: uuid(),text, username,timestamp: Date.now()}
    }
}

//setUsername function does not have a logic of creating and retruning an object donc () autour de la fonction implicit return
export const setUsername = (username) =>({
        type: SET_USERNAME,
        username
});

export const createReaction = ({type, emoji, username, messageId}) =>({

    type,
    item: {id: uuid(), timestamp:Date.now(),emoji, username,messageId}

});