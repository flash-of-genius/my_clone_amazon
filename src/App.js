/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* This is the default route, / */}
          <Route path="/">
            <h1>HOME PAGE!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* we need React-ROUTER */
}

{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}

export default App;
