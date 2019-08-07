import React, { Component } from 'react';
class Panel extends Component {

render(){
return <div className="container">
     <div className="card">
    <div className="card-header">{this.props.name}</div>
    <div className="card-body">{this.props.body}</div>
    </div>
    </div>
}

}
export default Panel;