import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./component/Layout/Navbar";
import Home from "./component/HomePage/Home";
import Profile from "./component/doctorsProfile/Profile";
import YourSchedule from "./component/YourSchedule/Schedule";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route exact path="/schedule" component={YourSchedule}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
