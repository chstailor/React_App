const token=localStorage.getItem("token")

export const TOG_NAV = "TOG_NAV";
export const LOG_NAV = "LOG_NAV";
export const FETCH_POST = "FETCH_POST";
export const CR_POST = "CR_POST";
export const LIKE_POST = "LIKE_POST";
export const DEL_POST = "DEL_POST";
export const GET_COMM ="GET_COMM";
export const DEL_COMM = "DEL_COMM";
export const SA_COMM ="SA_COMM";
export const SA_POST ="SA_POST";
export const UP_POST ="UP_POST";

export const tognav = (value) => {
  return {

    type: TOG_NAV,
    data: value
  }
}
export const lognav = (value) => {
  return {
    type: LOG_NAV,
    data: value
  }
}
export const getpost = () => {

  return (dispatch) => {
    
  fetch('http://localhost:3000/api/upost', {
      method: 'get',
      headers: { "token": token }
  }).then(function (response) {
      response.json().then(data => {
        dispatch({
          type: FETCH_POST,
          data
    
        })
      })
  })
  }
}
export const crpost = (data) => {
  return (dispatch) => {
  fetch('http://localhost:3000/api/post', {
    method: 'post',
    body:data,
    headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
}).then(function (response) {
    response.json().then(data =>  { 
        console.log(data) ;
        dispatch({
          type: FETCH_POST,
          
    
        })
     })
})
  }
}
export const lkpost = (data) => {
  return (dispatch) => {
  fetch('http://localhost:3000/api/like', {
    method: 'post',
    body:data,
    headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
}).then(function (response) {
    response.json().then(data =>  { 
        console.log(data) ;
        dispatch({
          type: LIKE_POST,
          
    
        })
     })
})
  }
}

export const dpost = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/delpost', {
      method: 'post',
      body:data,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
      response.json().then(data =>  { 
          console.log(data) ;
          dispatch({
            type: DEL_POST,
            
      
          })
       })
  })
    }
}

export const dcomm = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/delcomments', {
      method: 'post',
      body:data,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
      response.json().then(data =>  { 
          console.log(data) ;
          dispatch({
            type: DEL_COMM,
            
      
          })
       })
  })
    }
}
export const comm = (data) => {

  console.log(data);
  return (dispatch) => {
    fetch('http://localhost:3000/api/getcomments', {
      method: 'post',
      body:data,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
      response.json().then(data =>  { 
          console.log(data) ;
          dispatch({
            type: GET_COMM,
            data
            
      
          })
       })
  })
    }
}
export const scomm = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/scomment', {
      method: 'post',
      body:data,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
      response.json().then(data =>  { 
          console.log(data) ;
          dispatch({
            type: SA_COMM,
            data
      
          })
       })
  })
  return Promise.resolve();
    }
}
export const sinpost = (data) => {

  console.log(data)
  return (dispatch) => {
    fetch('http://localhost:3000/api/viewpost', {
      method: 'post',
      body:data,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
    console.log(response);
      response.json().then(data =>  { 
          console.log(data) ;
          dispatch({
            type: SA_POST,
            data
      
          })
       })
  })
    }
}
export const uppost = (data) => {

  console.log(data)
  return (dispatch) => {
    fetch('http://localhost:3000/api/updatepost', {
      method: 'post',
      body:data,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
    console.log(response);
      response.json().then(data =>  { 
          console.log(data) ;
          dispatch({
            type: UP_POST,
      
          })
       })
  })
    }
}