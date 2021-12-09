const reducer = (state, action) =>{
  const {type, data:{autors,messages}} = action;
  switch(type){
    case 'DATA_RESPONSE_SUCCESS':{
      const autorsMap = new Map();
      autors.forEach(autor=>autorsMap.set(autor.id, autor));

      const messagesWithAutors = messages.map(message=>{
        const messageWithAutors = {
          ...message,
          autor: autorsMap.get(message.autorId)
        }
        return messageWithAutors;
      });
      const newState = {
        ...state,
        autors,
        messages: messagesWithAutors
      }
      return newState;
    }
    case 'DATA_RESPONSE_ERROR':{}
    default:
      return state;
  }  
}

export default reducer;