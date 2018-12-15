import types from './types';

const setBooks = payload => ({
  type: types.SET_BOOKS,
  payload,
});

const getBooks = () => (dispatch, getState) => {
  
  let w = new WebSocket('wss://api.bitfinex.com/ws/2');

  w.onmessage = function (event) {
    console.log(event.data);
    dispatch(setBooks(event.data));
  };

  let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'book',
    symbol: 'tBTCUSD'
  });

  w.onopen = function (event) {
    w.send(msg);
  };
};

export default {
  getBooks,
};
