import React, { Component } from 'react';
import checkuser from '../auth';
import {Link} from 'react-router-dom'
import Login from './login';
import {connect} from 'react-redux'
import { lognav } from '../store/action/anav';
import history from '../history';
class Navigation extends Component {


state={

    islog:this.props.log

}

componentDidMount(){
//console.log(checkuser());

}

logout=()=>{
window.localStorage.removeItem("token");
history.push('/login');
this.props.dispatch(lognav(false));


}    


    render() {
    
        return (
        
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">My Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                           <ul className="navbar-nav">
                          {checkuser()&&<li className="nav-item active">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>}
                           { checkuser()&&<li className="nav-item">
                                <Link className="nav-link" to="/cpost">Create Post</Link>
                            </li>}
                           {checkuser()&& <li className="nav-item">
                                <Link className="nav-link" to="/post">View</Link>
                            </li>}

                        </ul>
                    </div>
                    <ul className="nav navbar-nav ml-auto">
                        {!checkuser()&&<li className="nav-item">
                            <Link className="nav-link" to="/regi">Register</Link>
                        </li>}
                        {!checkuser()&&<li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>}
                        {checkuser()&&<li className="nav-item">
                            <a className="nav-link" onClick={this.logout}>Logout</a>
                        </li>}
                    </ul>

                </nav>
            </div>
        )
    }
}
function mapStateToProps(store){
   


    return{
    log:store
    }
    }
export default connect(mapStateToProps)(Navigation);
    
