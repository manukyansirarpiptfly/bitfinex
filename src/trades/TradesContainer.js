import React, { Component } from 'react';
import { connect } from 'react-redux';

class TradesContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div>
        TradesContainer renders
      </div>
    );
  }
  
}

export default connect(({trades}) => ({trades}), null)(TradesContainer);
