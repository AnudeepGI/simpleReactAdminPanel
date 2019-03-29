import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import NavTop from './component/navtop';
import Dashboard from './component/dashboard/dashboard';
import User from './component/user/user';
import Table from './component/table/table';
import Notifications from './component/notifications/notifications';
import Icon from './component/icons/icon';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/user/" component={User} />
        <Route path="/table/" component={Table} />
        <Route path="/notifications/" component={Notifications} />
        <Route path="/icons/" component={Icon} />
      </Router>
    );
  }
}

export default App;
