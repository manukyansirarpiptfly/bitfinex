import types from './types';

const setBooks = payload => ({
  type: types.SET_BOOKS,
  payload,
});

const getBooks = () => (dispatch, getState) => {
  
  let w = new WebSocket('wss://api.bitfinex.com/ws/2');

  w.onmessage = function (event) {
    let data  = JSON.parse(event.data);

    if(Array.isArray(data)) {
      dispatch(setBooks(data[1]));
    }
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
