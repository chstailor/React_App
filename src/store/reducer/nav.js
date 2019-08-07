import {TOG_NAV,SA_POST} from '../action/anav'

const navReducers=(state,action)=>{

   switch(action.type){
    case SA_POST:
    return [
        action.data
      ]
    break;
default:return []    
}}
export default navReducers;