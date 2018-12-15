import axios from 'axios';
import types from './types';

const PUBLIC_API = 'https://api.bitfinex.com/v2/';

const setTrades = payload => ({
  type: types.SET_TRADES,
  payload,
});

const getTrades = () => (dispatch, getState) => {

  return axios.get(`${PUBLIC_API}trades/tBTCUSD/hist`)
    .then(function(result){
      dispatch(setTrades(result));
    });
};

export default {
  getTrades,
};
