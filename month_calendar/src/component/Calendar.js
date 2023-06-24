import React,{useEffect,useState} from 'react'
import '../style/Calendar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar() {

    const userValue = useLocation();
    const navigator = useNavigate();
const weekName = ["Su","Mo","Tu","We","Th","Fr","Sa"];

const [withweek,setWhole] = useState([]);


let cdate = parseInt(userValue.state[0]);
let month = parseInt(userValue.state[1] - 1);
let year = parseInt(userValue.state[2]);
var monthName = moment().month(month).format('MMMM');

useEffect(() => {
    var countdays = [];
    var wholearray = [];
var date_count = 1;
const daysInMonth = moment(`${year}-${month + 1}`, 'YYYY-M').daysInMonth();
const startOfMonth = moment(`${year}-${month + 1}`, 'YYYY-M').startOf('month');
const startingDay = weekName.indexOf(startOfMonth.format('dddd').substring(0,2));


for(let emp = 0 ; emp < startingDay; emp++){
    countdays.push(" ");
    date_count++;
}

for(let wd = 1 ; wd <= daysInMonth; wd++){
   
        countdays.push(wd);
if(date_count ===  7 ) {
    wholearray.push(countdays);
    countdays = [];
     date_count = 1;
}
else{
    date_count++;
}   
}
for(let emp = 0 ; date_count < 8; emp++){
    countdays.push(" ");
    date_count++;
}
wholearray.push(countdays);
setWhole(wholearray);

},[]);

const handleGoBack = () =>{
    navigator(-1);
}
    return (
        <div>
            <div className="calendarBoard">

    
    <ul className="calendarMY d-flex justify-content-center mt-5 mx-auto ">
            <li className="month mr-2">{monthName}</li>
            <li className="year">{year}</li>
        </ul>
        <div className="weekName">
        <ul className="d-flex justify-content-center m-auto ">
            {weekName.map((week) => (
                <li>{week}</li>
            ))
        }
        </ul>
        {withweek && withweek.map((ar1,key) => (
        //    <p> najeer </p>
            <ul className="d-flex justify-content-center m-auto ">
                {ar1.map((ar2,key) => (
<li class={cdate === parseInt(ar2) ? "highlited" : ""}>{ar2}</li>
                ))}
            </ul>
        ))}
       
    </div>
            <div className="col-6 mx-auto mt-2 d-flex justify-content-center">
    <button type="submit" className="btn btn-primary" onClick={handleGoBack}>Go Back</button>
</div>
</div>
        </div>
    )
}

export default Calendar


