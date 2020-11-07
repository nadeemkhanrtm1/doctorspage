import React from 'react';
import moment from "moment";

const Daily = () => {
  const timeArr = [
    "",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30"
  ];
  const DayArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const date = moment().format("Do");
  const month = moment().format("MMMM");
  const year = moment().format("yyyy");
  const day = moment().day();
  return (
    <div className="row p-0 mx-0 my-5">
      <div className="col-1 p-0 m-0 text-center">
          <h6 className="datemonthyearDayArrr">.</h6>
        {timeArr.map((value) =><h6 className="text-right pr-3 timeSize">{value}</h6>)}
      </div>
      <div className="col-11 p-0 m-0 text-center dailystatus">
        <h6 className="datemonthyearDayArr">{`${date} ${month} ${year}, ${DayArr[day]}`}</h6>
        {timeArr.map((value)=><div className="col-12 m-0 p-0 divforDailyWeekCallWithPatientABC">
            {/*<h6 className="text-left m-0 p-0 pl-3 dailyWeekVideoCallIwthPatientABC">
            Video Call with Patient ABC</h6>*/}
        </div>)}
      </div>
    </div>
  )
}

export default Daily;
