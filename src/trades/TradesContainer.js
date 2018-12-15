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
  
        {this.props.trades && this.props.trades.length > 0 && this.props.trades[0].map((trade, index) => (
          <p> {trade[0]}: {trade[1]}: {trade[2]}: {trade[3]}</p>
        ))}
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(getTrades, dispatch) }
}

export default connect(({trades}) => ({trades}), mapDispatchToProps)(TradesContainer);
