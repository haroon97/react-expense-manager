import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
}

const reset = () => {
  return {
    type: 'RESET'
  }
}

const set = ({setCount = 1} = {}) => {
  return {
    type: 'SET',
    setCount
  }
}

// Reducers

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.setCount
      }
    default:
      return state;
  }; 
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(decrementCount( {decrementBy: 10} ));

store.dispatch(reset());

store.dispatch(set( {setCount: 200} ))