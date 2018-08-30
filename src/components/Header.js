import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
      <header>Expensify</header>
      <NavLink to='/' activeClassName='is-active' exact={true}>home</NavLink><br />
      <NavLink to='/help' activeClassName='is-active'>help</NavLink><br />
      <NavLink to='/create' activeClassName='is-active'>create</NavLink><br />
    </div>
  );

  export default Header;