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
          BooksContainer renders
          
          {this.props.books && this.props.books.length > 0 && this.props.books[0].map((book, index) => (
            <p> {book[0]}: {book[1]}: {book[2]}</p>
          ))}
          
        </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(getBooks, dispatch) }
}

export default connect(({books}) => ({books}), mapDispatchToProps)(BooksContainer);


