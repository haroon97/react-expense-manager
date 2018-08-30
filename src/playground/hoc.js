// Higher Order Component - A component that renders other components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>the info is {props.info}</p>
    </div>
  );
}

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAdmin && <p>This is a confidential info please dont share</p>}
        <WrappedComponent {...props} />
      </div>
    );
  }
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated === true ? <WrappedComponent {...props}/> : <p>Please login to see the info</p>}
      </div>
    );
  }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info='my name is haroon'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='my name is haroon'/>, document.getElementById('app'));