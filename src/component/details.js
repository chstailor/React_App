import React, { Component } from 'react';
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import history from '../history';
import { getpost, lkpost, dcomm, dpost, comm,scomm,sinpost,uppost} from '../store/action/anav'




class Details extends Component {

state={
 details:{
 description: "",
like: [],
name: "",
title: "",
id:""
    },
    user:"",
isshow:false

}
    componentDidMount() {
    const ch=this.props.match.params.pId
const vs="pid=" + ch

const token=localStorage.getItem("token")
const that=this
fetch('http://localhost:3000/api/viewpost', {
      method: 'post',
      body:vs,
      headers: { "Content-Type": "application/x-www-form-urlencoded","token": token }
  }).then(function (response) {
      response.json().then(data =>  { 
          console.log(data);
        that.setState((prev)=>{
           return{
            details:{
                description: data.description,
        like:data.like,
        name: data.name,
        title: data.title,
        id:data._id
            }

           }
            
     }
    );
            
      
      
            })
  })

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

 
 this.props.dispatch(comm(vs))

    
    
    
    }


    comm (text) {
    console.log(text);
        const that=this;
        return event => {
            var ch="pid=" + text + "&&" + serializeForm(event.target)
         console.log(ch);
            that.props.dispatch(scomm(ch));
            this.componentDidMount();
          event.preventDefault();
          
        }
      }
      updatec (text) {
       console.log(text);
    
            return event => {
                var ch="_id=" + text + "&&" + serializeForm(event.target)
             
                this.props.dispatch(uppost(ch));  
               
               this.componentDidMount();

               this.setState((prev) => {

                return { isshow: false }
            }
            );
              event.preventDefault();
              
            }
          }

      delcom = (val) => {
        var ch = "pid=" + val
        this.props.dispatch(dpost(ch));
        this.props.dispatch(dcomm(ch));
        history.push("/post");
    }
    likepost = (val, tu) => {
        var ch = "id=" + val + "&&name=" + tu
        console.log(ch);

        this.props.dispatch(lkpost(ch));
        this.componentDidMount();
    }

    up=()=>{

        this.setState((prev)=>{
 
            return {isshow:!prev.isshow}
   }
    );

    }

render(){
    {console.log(this.state.details.like.length)}
return(
<div>


<br/>
<br/>
<br/>
<br/>
<div className="card text-white bg-primary mb-3">
         <div className="card-header">
          View Posts
         </div>
</div>
<div className="card-body">
         <div>
         <h5>Created By:- {this.state.details.name} </h5>
         </div>
         <div>
         <h6>Title::--{this.state.details.title}</h6>
         </div>
         <div>
         <h6>Description::--{this.state.details.description}</h6>
         </div>
         <br/>
         <br/>
        <div>
        <h6>Comments:----</h6>
</div>
</div>
<div className="container">
{
                                 this.props.posta[0] && this.props.posta[0].map((iteams, index) => (
                                     
                                     <div key={index}>
                                       < br />
                                     <div>{iteams.comments}<span>  </span>by <span className="font-weight-bold">{iteams.cname}</span> </div>
                                   
                                     </div>
                                   
                                    ))

                                    }
</div>
<br/>
<br/>
<br/>
<br/>
<form className="form-group" onSubmit={this.comm(this.state.details.id)} >
                                          
                                         
                                            
                                          <div>
                                              <label style={{ margin: "10px" }}>Add Comments</label>
                                              <input type="text" className="form-control" placeholder="addcoments" name="comments" style={{ width: "70%" ,margin:"10px"}}/>
                                          </div>
                                          <br />
                                          <button className="btn btn-success"  style={{ margin: "10px" }}>Add comments</button>
                                         
        
                                      </form>
                                      <button className="btn btn-primary"  style={{ margin: "10px" }}   onClick={this.up}   >Update comments</button>
                                      <button className="btn btn-success" style={{ margin: "10px" }} onClick={() => { this.delcom(this.state.details.id) }}>Delete Post</button>
                                      <button className="btn btn-success" style={{ margin: "10px" }} onClick={() => { this.likepost(this.state.details.id, this.state.user) }}title={this.state.details.like}>Like{this.state.details.like.length}</button>
                                      <br/>
                                      {this.state.isshow&&<form onSubmit={this.updatec(this.state.details.id)}>
                                        <h1 style={{ margin: "10px" }}>Update Post</h1>
                                        <input type="text" class="form-control" id="exampleInputPassword1" name="post" style={{ width: "70%" ,margin:"10px"}} />
                                         <button class="btn btn-success"style={{ margin: "10px" }}>submit</button>



                                      </form>}
                                      



</div>

)

}
}
function mapStateToProps(store) {

    return {

        comme:store.nav,
        posta:store.comm
    }
}

export default connect(mapStateToProps)(Details);