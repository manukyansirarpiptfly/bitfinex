import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import  getTicker  from './actions';

class TickerContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    this.props.actions.getTicker();
  }
  
  render() {
      return (
        <div>
          <h2>Ticker</h2>
    
          {this.props.ticker && this.props.ticker.length > 0 && this.props.ticker[0].map((ticker, index) => (
            <div className='Row'>
              <div>{ticker}</div>
            </div>
          ))}
          
        </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(getTicker, dispatch) }
}

export default connect(({ticker}) => ({ticker}), mapDispatchToProps)(TickerContainer);


