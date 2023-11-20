import React, {useContext} from 'react';
import {setUsername} from '../state/actions';
import  Context  from '../context';

function SetUsername(){
    
    const {dispatch, state} = useContext(Context);
    

    const updateUsername = (event) =>{
        dispatch(setUsername(event.target.value));
    }

    return(<>
    <h3>Username</h3>
    <input onChange ={updateUsername} value ={state.username}/>{/*here we want the username to be accessible from multiple components in the app.(PublishMessage)
    Donc value mise dans le reducer pour être disponible > types.js (const SET_USERNAME) > actions.js (import + action creator) >reducer
    Jsqu'à présent value était la data du local state du composant.
    Ensuite relier le composant setUsername au reducer flow créé.
    When user types in input a setUsername action should be dispatch locally.
    The input value should come from the reducer state object.
    Need access to the relevant reducer state and dispatch method > useAppContext hook */}
    </>)

}

export default SetUsername;