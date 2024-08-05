import { createStore } from 'redux';

const initialState = {
  count: 0,
};

function reducer(state = initialState, action: { type: string }) {
  const { count } = state;
  if (action.type === 'INCREMENT') {
    return { ...state, count: count + 1 };
  } else if (action.type === 'DECREMENT') {
    return { ...state, count: count - 1 };
  } else {
    return state;
  }
}

export const store = createStore(reducer);
