import types from './types';

const initialState = [
    {
      time: '1.1',
      price: '1.2',
      amount: '1.3'
    },
    {
      time: '2.1',
      price: '2.2',
      amount: '2.3'
    }
];

const reducer = (state = initialState, action) => {
  
  const { type, payload } = action;
  
  switch (type) {
    case types.SET_TRADES:
      return  [
        ...state, payload
      ];
    
    default:
      return state;
  }
}

export default reducer;