import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { connect } from 'react-redux';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    {props.expense.length === 0 && <h3>Enter your expenses for the day</h3>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expense: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseDashboardPage);