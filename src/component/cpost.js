import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { crpost } from '../store/action/anav'
import history from '../history';
class Cpost extends Component {


    state = {
        user: "",
      
    }

componentDidMount() {
const token = localStorage.getItem("token");
const that = this
fetch('http://localhost:3000/api/currentuser', {
            method: 'get',
            headers: { "token": token }
        }).then(function (response) {
            response.json().then(data => {
                console.log(data)
                that.setState((prev) => {

                    return { user: data.username }
                }
                );
            })
        })

    }
    crpost=(event)=>{
        
        this.props.dispatch(crpost(serializeForm(event.target)));
        history.push('/post');
        event.preventDefault();
        }
        

render(){

    


return (

<div className="container">
<br/>
<h2> Welocome {this.state.user}</h2>


<form onSubmit={this.crpost}>
  <div className="form-group">
    <label>Post Title</label>
    <input type="text" className="form-control" placeholder="Title" name="title"/>

  </div>
  <div className="form-group">
    <label>Post Description</label>
    <input type="text" className="form-control" placeholder="Description"
    name="description"/>
  </div>
  <button className="btn btn-primary" >Genrate Post</button>
  </form>
</div>

)


}





}
function mapStateToProps(store) {   
    console.log(store)
    return {

        loga: store.post
    }    
}

export default connect(mapStateToProps)(Cpost);