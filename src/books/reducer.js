import types from './types';

const initialState = [
  {
    count: '1.1',
    amount: '1.2',
    total: '1.3',
    price: '1.3'
  },
  {
    count: '2.1',
    amount: '2.2',
    total: '2.3',
    price: '2.3'
  }
];
const reducer = (state = initialState, action) => {
  
  const { type, payload } = action;
  
  switch (type) {
    
    case types.GET_BOOKS:
      return  [
        ...state, payload
      ];
  
    default:
      return state;
  }
  
}

export default reducer;