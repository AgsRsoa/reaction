import React, {useState, useContext} from 'react';
import Context from '../context';
import {newMessage} from '../state/actions'; //access to newMessage action creator when it is ready to disptach the relevant action object

//This component dispatch new message object when the user types a new message

function PublishMessage(props){
    //const {dispatch}= props;
    const { state:{username}, pubsub:{publish} } = useContext(Context); //instead of const {dispatch}
    const [text,setText] = useState('');

    const updateText = (event)=>{
        setText(event.target.value);
    }

    //The goal is to dispatch a new message action to the reducer system defined in the App
    //Use props to pass the dispatch method defined in the App and have access to it here
    const publishMessage = () =>{
        publish(newMessage({text, username})) //instead of dispatch
      
    }

    const handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            publishMessage()
        }
    }

    return (<>
    <h3>Got something to say</h3>
    <input value = {text} onChange={updateText} onKeyPress={handleKeyPress}/>
    <button onClick={publishMessage}>Publish</button>
    </>)
}

export default PublishMessage;