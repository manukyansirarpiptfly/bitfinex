import axios from 'axios';
import types from './types';

const PUBLIC_API = 'https://api.bitfinex.com/v2/';

const setBooks = payload => ({
  type: types.SET_BOOKS,
  payload,
});

const getBooks = () => (dispatch, getState) => {
  
  return axios.get(`${PUBLIC_API}book/tBTCUSD/P0`)
    .then(function(result){
      dispatch(setBooks(result));
    });
};

export default {
  getBooks,
};
