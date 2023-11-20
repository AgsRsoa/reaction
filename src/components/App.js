import React, {useReducer, useEffect} from 'react';
import reducer, {initialState} from '../state/reducer';
import Context from '../context'; //the Context object comes with a context provider component
import PubSub from '../pubsub';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import SetUsername from './SetUsername';


const pubsub = new PubSub();

//setTimeout(()=>{ pubsub.publish({type:'foo',value:'bar'})},1000) to test with 2 apps opened

//TODO with the reducer
//1 component to publish message by calling the dispatch method
//1 component to display messages from the reducer store

function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  //initialState 2nd parameter of useReducer to initialize the reducer state defined in the reducer.js

  //We move the code into App component because dispatch is defined there
  //Adding a listener is a side effect > useEeffect
  useEffect(()=>{

//To handle incoming messages, connect pubsub system and reducer
//After publishing, Subscribers can dispatch action to local reducers => Use addListener function 
pubsub.addListener({
  message: messageObject =>{
    const {channel, message } = messageObject;
    console.log('Received message', message, 'channel', channel)
    dispatch(message); 
  }
  })

  },[]) //Now any app can use the publish method to send an action object to the channel and subscribers on can pick it

  console.log('state',state);
  return (
    <Context.Provider value={{state, dispatch, pubsub}}> {/*Add items to the context storage unit by using value property of the Context Provider*/}
     <h2>Reaction</h2>
     <SetUsername/>
     <hr/>
     <PublishMessage />
     <MessageBoard />
    </Context.Provider>
  );
}

export default App;
