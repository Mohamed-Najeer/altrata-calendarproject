import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const  App = () => {

const [date,setDate] = useState(null);
const [month,setMonth] = useState(null);
const [year,setYear] = useState(null);
const [error,setError] = useState([]);

const uservalue = [];




const trigger = useNavigate();

const Generate = (e) =>{
  e.preventDefault();
const newError = {};





if(date > 31 || date === null){
newError.date = 'Please Enter The Correct Date';
}
else if(month > 12 || month === null){
  newError.month = 'Please Enter The Correct Month';
}
else if(year === null){
  newError.year = 'Please Enter The Correct Year';
}
else{
  uservalue.push(date);
  uservalue.push(month);
  uservalue.push(year);
  trigger('/calendar/',{ state: uservalue});
}





  setError(newError);
}


  return (
    <div className="App m-5">
      <h3 className="text-center">React Calendar</h3>
    <form onSubmit={Generate}>

    <div className="row justify-content-center">
    <div className="col-6 m-2">
    <input type="text" className="form-control" name="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>
  
    </div>
    <div className="col-6 m-2">
  {error.date && <span style={{color:"red"}}>{error.date}</span> }
  </div>
    <div className="col-6 m-2">
    <input type="text" className="form-control" name="month" value={month} placeholder="Month" onChange={(e) => setMonth(e.target.value)}/>

    </div>
    <div className="col-6 m-2">
    {error.month && <span style={{color:"red"}}>{error.month}</span> }
    </div>
    <div className="col-6 m-2">
    <input type="text" name="year" value={year} className="form-control" placeholder="Year" onChange={(e) => setYear(e.target.value)}/>
    </div>
    <div className="col-6 m-2">
    {error.year && <span style={{color:"red"}}>{error.year}</span> }
    </div>

    <div className="col-6 m-2">
    <button type="submit" className="btn btn-primary">Show Me</button>
</div>
  </div>



      {/* <div>
        <label for="date">Date :</label>
        <input type="text" className="form-control" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <div>
        <label for="month">Month :</label>
        <input type="text" className="form-control" name="month" value={month} onChange={(e) => setMonth(e.target.value)}/>
        </div>

        <div>
        <label for="year">Date :</label>  
        <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)}/>
        </div> */}



    </form>
    </div>
  );
}

export default App;
