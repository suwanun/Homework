import React from 'react';

class Output extends React.Component {
  constructor(props) {
    super();
  }

  render(){
    const page = this.props.page;
    const params = this.props.match.params;
    return (
      <div>
      <h1>{params.value}</h1>
      </div>
    );
  }
}

export default Output;
