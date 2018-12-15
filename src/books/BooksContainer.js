import React, { Component } from 'react';
import { connect } from 'react-redux';


class BooksContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  
  componentDidMount() {
  
  }
  
  render() {
      return (
        <div>
          BooksContainer renders
        </div>
      );
  }
  
}

export default connect(({books}) => ({books}), null)(BooksContainer);
