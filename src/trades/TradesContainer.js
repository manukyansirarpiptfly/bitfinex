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
  
        <h2>TRADES</h2>
        <div className='Row'>
          <div className='RowTitle'> TIME </div>
          <div className='RowTitle'>PRICE</div>
          <div className='RowTitle'>AMOUNT</div>
        </div>
        {this.props.trades && this.props.trades.length > 0 && this.props.trades[0].map((trade, index) => (
          <div className='Row'>
            <div>{trade[1]}</div>
            <div>{trade[2]}</div>
            <div>{trade[3]}</div>
          </div>
        ))}
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(getTrades, dispatch) }
}

export default connect(({trades}) => ({trades}), mapDispatchToProps)(TradesContainer);
