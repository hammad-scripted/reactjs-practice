import React from 'react';
import { useReducer } from 'react';
const App = () => {
  const initialState = { count: 0 };
  const [count, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    if (action.type === 'increment') {
      return { count: state.count + 1 };
    }
    if (action.type === 'decrement') {
      return { count: state.count - 1 };
    }
    return state;
  }
  return (
    <div>
      <h1>Count: {count.count}</h1>

      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment{' '}
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement{' '}
      </button>
    </div>
  );
};

export default App;
