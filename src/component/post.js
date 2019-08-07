import React, { Component } from 'react';
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import {Link} from 'react-router-dom'
import { getpost, lkpost, dcomm, dpost, comm,scomm } from '../store/action/anav'

class Post extends Component {

    state = {
        user: "",
        valee: ""

    }
    componentDidMount() {
        this.props.dispatch(getpost());
        const token = localStorage.getItem("token")

        const that = this
        fetch('http://localhost:3000/api/currentuser', {
            method: 'get',
            headers: { "token": token }
        }).then(function (response) {
            response.json().then(data => {
                that.setState((prev) => {

                    return { user: data.username }
                }
                );
            })
        })

    }


    getcom = (val) => {
        var ch = "pid=" + val 
        this.props.dispatch(comm(ch));
        console.log(ch);
   
    
        this.setState((prev) => {
            return {
                valee: val
            }
        })
        event.preventDefault();
    }

    likepost = (val, tu) => {
        var ch = "id=" + val + "&&name=" + tu
        console.log(ch);

        this.props.dispatch(lkpost(ch));
        this.componentDidMount();
    }


    delcom = (val) => {
        var ch = "pid=" + val
        this.props.dispatch(dpost(ch));
        this.props.dispatch(dcomm(ch));
        this.componentDidMount();
    }
    comm (text) {
        const that=this;
        return event => {
            var ch="pid=" + text + "&&" + serializeForm(event.target)
            that.props.dispatch(scomm(ch)).then(()=>{this.getcom(text);});
     
            
          event.preventDefault();
          
        }
      }
    

    render() {


console.log(this.state.valee);
        return (

            <div className="container">
                <br />
                <br />
                <h2>welcome  {this.state.user}</h2>
                <br />
                <br />
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">
                        Posts
          </div>
                </div>
                <div>
                    {

                        this.props.loga[0] && this.props.loga[0].map((iteams, index) => (
                            <div key={index} style={{ margin: "10px", padding: "10px", border: "2px solid black", borderRadius: "10px" }} >
                                <div>
                                    <h5>Created By:- {iteams.name}</h5>
                                </div>
                                <div>
                                    <h6>Title::--{iteams.title}</h6>
                                </div>
                                <div>
                                    <h6>Description::--{iteams.description}</h6>
                                </div>
                                <button className="btn btn-success" style={{ margin: "10px" }} onClick={() => { this.likepost(iteams._id, this.state.user) }}>Like {iteams.like.length}</button>
                                <button className="btn btn-primary" style={{ margin: "10px" }} onClick={() => { this.getcom(iteams._id) }}>Comments</button>
                                <button className="btn btn-success" style={{ margin: "10px" }} onClick={() => { this.delcom(iteams._id) }}>Delete Post</button>
                                <button className="btn btn-success" style={{ margin: "10px" }} ><Link to={"/post/"+iteams._id}style={{color: 'white'}}>View Details</Link></button>
                                {
                                    
                                   (iteams._id==this.state.valee)?<form onSubmit={this.comm(iteams._id)}>
                                    {
                                 this.props.comme[0] && this.props.comme[0].map((iteams, index) => (
                                     
                                     <div key={index}>
                                       < br />
                                     <div>{iteams.comments}<span>  </span>by <span className="font-weight-bold">{iteams.cname}</span> </div>
                                   
                                     </div>
                                   
                                    ))

                                    }
                                    <br/>
                                        <div className="form-group">
                                          
                                         
                                            
                                            <div>
                                                <label>Add Comments</label>
                                                <input type="text" className="form-control" placeholder="addcoments" name="comments" />
                                            </div>
                                            <br />
                                            <button className="btn btn-success"  >Add comments</button>
                                        </div>
                                    </form>:null



                                }

                            </div>

                        ))
                    }


                </div>



            </div>



        )
    }
}

function mapStateToProps(store) {
    console.log(store);
    return {

        loga: store.post,
        comme:store.comm
    }
}

export default connect(mapStateToProps)(Post);