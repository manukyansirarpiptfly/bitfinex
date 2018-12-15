import types from './types';

const initialState = [];

const reducer = (state = initialState, action) => {
  
  const { type, payload } = action;
  
  switch (type) {
    
    case types.SET_TICKER:
      return  [
        ...state, payload
      ];
  
    default:
      return state;
  }
  
}

export default reducer;