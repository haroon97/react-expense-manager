import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
}

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

// EDIT EXPENSE
const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

// Expenses reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        return expense.id !== action.id
      })
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        else {
          return expense;
        }
      })
    default: 
      return state
  }
};

// SET TEXT FILTER
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}

// SORT BY AMOUNT
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}

// SORT BY DATE
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

// SET START DATE
const setStartDate = (date = undefined) => {
  return {
    type: 'SET_START_DATE',
    date
  }
}

// SET END DATE 
const setEndDate = (date = undefined) => {
  return {
    type: 'SET_END_DATE',
    date
  }
}

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
       return {
         ...state,
         startDate: action.date
       }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state
  }
}

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1;
    }
  })

}

// Store creation

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpeneses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpeneses);
})

const expenseOne = store.dispatch(addExpense( {description: 'Home rent', amount: 0, createdAt: 1000} ));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: 6, createdAt: 2000} ));

// store.dispatch(removeExpense( {id: expenseOne.expense.id} ));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 100}));

// store.dispatch(setTextFilter('cof'));
// store.dispatch(setTextFilter('bill'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate(432));
// store.dispatch(setEndDate(223));
// store.dispatch(setEndDate(666));

console.log( expenseOne.expense.id)

const user = {
  name: 'haroon',
  age: 21
}

console.log({
  ...user,
  location: 'Lahore',
  spouse: 'Anisha',
  age: 24
})