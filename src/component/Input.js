import React from 'react';
import {NavLink} from 'react-router-dom';

class Input extends React.Component {
  constructor() {
    super();
    this.state = { User : ""};
  }

  setAge(e) {
    var age = e.target.value;
    this.setState({User:age});
  }

  render(){
    return (
      <div>
      <input type = "text" onChange = {this.setAge.bind(this)}
      placeholder = "Name" ref = "name" />
      <NavLink to = {{pathname : "/level1/" + this.state.User}}
      activeClassName = "active">
      <input type = "sumbit" />
      </NavLink>
      </div>
    );
  }
}

export default Input;
