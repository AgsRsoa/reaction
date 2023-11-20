import React, {useContext} from 'react';
import Context from '../context';
//Displays the messages in the reducer state
//Reads the data from the state and display it 
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';

function MessageBoard(props) {
   //const {state} = props;
    const { state }= useContext(Context);
    //const {state:{messages}} = useContext(Context); puis messages.map directement
    return(
        <div>
        {state.messages.map((mess)=>{
            return(
                <div key={mess.id}>
                    <h4>{new Date(mess.timestamp).toLocaleString()}</h4>
                    <p>{mess.text}</p>
                    <h4> - {mess.username}</h4>
                    <CreateReaction messageId={mess.id}/>
                    <MessageReactions messageReactions={state.reactionsMap[mess.id]}/>{/*the array is accessed from the reducer reaction map keyed under the relevant message id*/}
                    <hr/>
                </div>
            )
        })
        } 
         </div>
    );

}

export default MessageBoard;

