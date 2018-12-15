import types from './types';

const setTrades = payload => ({
  type: types.SET_TRADES,
  payload,
});

const getTrades = () => (dispatch, getState) => {
  
  let w = new WebSocket('wss://api.bitfinex.com/ws/2');
  
  w.onmessage = function (event) {
    console.log(event.data);
    dispatch(setTrades(event.data));
  };

  let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'trades',
    symbol: 'tBTCUSD'
  });

  w.onopen = function (event) {
    w.send(msg);
  };

};

export default {
  getTrades,
};
