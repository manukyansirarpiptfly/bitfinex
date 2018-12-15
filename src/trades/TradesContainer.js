import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  getTrades  from './actions';

class TradesContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    this.props.actions.getTrades();
  }
  
  render() {
    return (
      <div>
        TradesContainer renders
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(getTrades, dispatch) }
}

export default connect(({trades}) => ({trades}), mapDispatchToProps)(TradesContainer);
