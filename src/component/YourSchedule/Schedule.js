import React from 'react';
import {Link, Route} from "react-router-dom";
import LeftArrow from "../../Images/LeftArrow.png";
import RightArrow from "../../Images/RightArrow.png";
import moment from "moment";
import Week from "./Week";
import Daily from "./Daily";
import Month from "./Month";

const Schedule = () => {
  const MonthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  let month = 1 + moment().month();
  let year = moment().year();
  return (
    <div className="container my-5 YourScheduleContainer">
      <div className="row">
        <div className="col-9">
          <img src={LeftArrow} alt="..." className="arrow"/>
          <p className="d-inline monthyear">{MonthArr[month]} {year}</p>
          <img src={RightArrow} alt="..." className="arrow"/>
        </div>
        <div className="col-3 text-center">
          <Link className="DailyWeekMonth" to="/schedule">Daily</Link>
          <Link className="mx-3 DailyWeekMonth" to="/schedule/week">Week</Link>
          <Link className="DailyWeekMonth" to="/schedule/month">Month</Link>
        </div>
        <div className="col-12">
            <Route exact path="/schedule" component={Daily}/>
            <Route exact path="/schedule/week" component={Week}/>
            <Route exact path="/schedule/month" component={Month}/>
        </div>
      </div>
    </div>
  )
}

export default Schedule
