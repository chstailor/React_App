export const loadsate =()=>{

try {
const serializedstate=localStorage.getItem("state");
if(serializedstate == null){

    return undefined;
}
return JSON.parse(serializedstate);

}
catch(err){
    return undefined;
}

}
export const savestate =(state)=>{
try{
const serializedstate=JSON.stringify(state);
localStorage.setItem('state',serializedstate);


}
catch(err){


}


}