import React from 'react';

function MessageReactions({messageReactions}){

    if(!messageReactions) {return null};

    return(
        messageReactions.map(({id,emoji,username}, index)=>{
                return(
                <span key={id}>
                    <em>{username}:</em>
                    {emoji}
                    {index !== messageReactions.length-1 ? ', ' : null}
                </span>)
        })
    
     )

}

export default MessageReactions;