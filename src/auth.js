const checkuser=()=>{
if(window.localStorage.getItem("token"))
return true;
 else{

        return false;
    }
    }


    

    export default checkuser;