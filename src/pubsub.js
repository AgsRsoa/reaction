import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

//Here instance of PubNub class 
/*PubNub class has 3 methods : 
subscribe(),
addListerner() code that runs when a message gets published on a subscribe channel,
publish() send messages to a channel itself
*/
export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

function PubSub(){
    const pubnub = new PubNub(pubnubConfig);
    
    pubnub.subscribe({channels:[MESSAGE_CHANNEL]});

    this.addListener = listenerConfig =>{
        pubnub.addListener(listenerConfig);
    }

    this.publish = message =>{
        console.log('publish message', message);

        pubnub.publish({
            message,
            channel: MESSAGE_CHANNEL
        });
    }

}

export default PubSub;

/*const pubnub = new PubNub(pubnubConfig);

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

pubnub.subscribe({channels:[MESSAGE_CHANNEL]});


pubnub.addListener({
    message:(messageObject)=>{ console.log('messageObject',messageObject)}
})


    pubnub.publish({
        message:'foo',
        channel:MESSAGE_CHANNEL
    })*/





/*No need to create a channel on the cloud with Pubnub, it automtically creates 1 at the initial publish*/ 