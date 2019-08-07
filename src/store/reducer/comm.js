import {FETCH_POST,CR_POST,LIKE_POST,DEL_COMM,DEL_POST,GET_COMM,SA_COMM, SA_POST,UP_POST} from '../action/anav'
const init=[]
const commReducers=(state=init,action)=>{
 
switch(action.type){
   
  
    case GET_COMM:
    return [
        action.data
      ]
    break;
    case UP_POST:
    return state
    break;
   
    default:
         return state;
}

}
export default commReducers;