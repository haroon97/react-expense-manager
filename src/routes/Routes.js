import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/Error';
import HelpPage from '../components/Help';
import ExpenseDashboardPage from '../components/Home';
import AddExpensePage from '../components/Create';   
import EditExpensePage from '../components/Edit'; 
  
const Routes = () => {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpensePage}  />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFound} />
       </Switch>  
      </div>
    </BrowserRouter>
    );
  }

export default Routes;