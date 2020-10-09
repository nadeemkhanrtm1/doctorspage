import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./component/Layout/Navbar";
import Doctor from "./component/doctorsProfile/Doctor";
import Title from './component/doctorsProfile/Title';
import Personaldetails from "./component/doctorsProfile/Personaldetails";
import Profile from "./component/doctorsProfile/Profile";

// import Home from "./component/Home"; import Profile from
// "./component/Profile"; import Schedule from "./component/Schedule";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/*<Switch>
       <Route path="/" component={Home} />
       <Route path="/profile" component={Profile}/>
       <Route path="/schedule" component={Schedule} />
     </Switch>*/}
        <Navbar/>
        <Profile/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
