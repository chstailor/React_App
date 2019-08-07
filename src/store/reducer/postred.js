import {FETCH_POST,CR_POST,LIKE_POST,DEL_COMM,DEL_POST,GET_COMM,SA_COMM,SA_POST} from '../action/anav'
const init=[]
const postReducers=(state=init,action)=>{
   
switch(action.type){
    case FETCH_POST:
    return[
        action.data
      ]

    break;
    case CR_POST:
    return state
    break;
    case LIKE_POST:
    return state
    break;
    case DEL_POST:
    return state
    break;
    case DEL_COMM:
    return state
    break;
    case SA_COMM:
    return state
    break;
  
    default:
         return state;
}

}
export default postReducers;