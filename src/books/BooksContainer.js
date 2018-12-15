import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import  getBooks  from './actions';

class BooksContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    this.props.actions.getBooks();
  }
  
  render() {
      return (
        <div>
          <h2>ORDER BOOK</h2>
          <div className='Row'>
            <div className='RowTitle'> PRICE </div>
            <div className='RowTitle'>COUNT</div>
            <div className='RowTitle'>AMOUNT</div>
          </div>
          {this.props.books && this.props.books.length > 0 && this.props.books[0].map((book, index) => (
            <div className='Row'>
              <div>{book[0]}</div>
              <div>{book[1]}</div>
              <div>{book[2]}</div>
            </div>
          ))}
          
        </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(getBooks, dispatch) }
}

export default connect(({books}) => ({books}), mapDispatchToProps)(BooksContainer);


