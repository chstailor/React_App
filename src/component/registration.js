import React, { Component } from 'react';
import Panel from '../component/panel'
import serializeForm from 'form-serialize'
import history from '../history';

import { withRouter } from "react-router";
class Registration extends Component {
    state = {
        message: {
            msg: ""
          
        }
    }
    createu = (event) => {
const that=this
fetch('http://localhost:3000/api/users', {
            method: 'post',
            body: serializeForm(event.target),
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }).then(function (response) {
            response.json().then(data =>  { 
                console.log(data) ;
                if(data.success){
                    history.push('/login');}
                    else{
                        console.log(data.message);
                        that.setState((pre) => {
                            return {
                                message: {
                                 msg:data.message
                                }
                            }
                        });
                   

                    }
             })
        })
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        const content = (
            <div>
            <form onSubmit={this.createu}>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="UserName" name="username" />

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password" name="password" />
                </div>
                <div className="form-group">
                    <label>FirstName</label>
                    <input type="text" className="form-control" placeholder="FirstName" name="firstName" />
                </div>
                <div className="form-group">
                    <label>lastName</label>
                    <input type="text" className="form-control" placeholder="LastName" name="lastName" />
                </div>
                <div className="form-group">
                    <label>Phonr Number</label>
                    <input type="text" className="form-control" placeholder="PhoneNumber" name="phone" />
                </div>
                <button className="btn btn-primary" >Submit</button>
            </form>
         <br/>
         <br/>
            <div className="row show-hide-message" >
            
            <div>{this.state.message.msg}</div>
             </div>
            
          
        
            </div>
        
            
        )

        return <Panel name="Register" body={content} />
    }

}
export default withRouter(Registration);


