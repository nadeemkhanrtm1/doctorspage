import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Personaldetails from './Personaldetails';
import Clinicdetails from "./Clinicdetails";
import Fullclinicdetail from './Fullclinicdetail';

const Title = () => {
  return (
    <React.Fragment>
      <div className="text-center py-3 doctordetailstitle">
        <div className="d-inline detailsTitle">
          <Link to="/profile">Personal Details</Link>
        </div>
        <div className="d-inline detailsTitle">
          <Link to="/profile/clinic-details">Clinic Details</Link>
        </div>
      </div>
        <Switch>
            <Route exact path="/profile" component={Personaldetails}/>
            <Route exact path="/profile/clinic-details" component={Clinicdetails}/>
            <Route exact path="/profile/clinic-full-details" component={Fullclinicdetail}/>
        </Switch>
    </React.Fragment>
  )
}

export default Title
