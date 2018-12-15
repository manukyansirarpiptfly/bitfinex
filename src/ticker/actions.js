import types from './types';

const setTicker = payload => ({
  type: types.SET_TICKER,
  payload,
});

const getTicker = () => (dispatch, getState) => {
  
  let w = new WebSocket('wss://api.bitfinex.com/ws/2');

  w.onmessage = function (event) {
    let data  = JSON.parse(event.data);
    if(Array.isArray(data)) {
      dispatch(setTicker(data[1]));
    }
  };

  let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD'
  });

  w.onopen = function (event) {
    w.send(msg);
  };
};

export default {
  getTicker,
};
