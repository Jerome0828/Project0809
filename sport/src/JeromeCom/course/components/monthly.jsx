import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";  // npm remove react-calendar
import "react-calendar/dist/Calendar.css";

import axios from 'axios';

function Monthly(props) {
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const [btnData, setBtnData] = useState([]);
  

  const [news, setNews] = useState(undefined);
  const [maxDate, setMaxDate] = useState("");
  const [value, setValue] = useState(new Date());
  const [test, setTest] = useState([]);
  const [checkDay, setCheckDay] = useState([
    new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), day[new Date().getDay()]
  ]);

  useEffect( () => {
    let month = new Date().getMonth() + 2;
    let tod = new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
    setMaxDate(tod);
  }, [])

  useEffect( () => {
    setNews(props.news)

    const Qs = require("qs")
    async function post() {
      await axios.post("http://localhost:80/sport/monthlyButton.php", Qs.stringify({ pid: `${props.pid && props.pid}` }))
      .then( response => {
        if ( typeof response.data == "object" ) {
          button(response.data)
        }
      })
    }
    post()
  }, [props])

  useEffect( () => {
    button(news)
  }, [checkDay])


  let button = (btnValue) => {
    if ( typeof btnValue == 'object' ) {
      Object.keys(btnValue).map( (val) => {
        if ( val == checkDay[3] ){
          setTest('')
          setBtnData([])
          if ( btnValue[val] != 0) {
            let firstHour = btnValue[val].split(' ')[0].split(':')[0];
            let lastHour  = btnValue[val].split(' ')[2].split(':')[0];

            let numFirstHour = Number(firstHour);
            let numLastHour  = Number(lastHour);

            let b = []
            for ( let i = numFirstHour ; i < numLastHour ; i++ ) {
              if ( numFirstHour < 10 && numFirstHour+1 < 10) {
                  var a = `0${numFirstHour} ~ 0${numFirstHour + 1}`
              }else if ( numFirstHour < 10 && numFirstHour+1 == 10 ){
                  var a = `0${numFirstHour} ~ ${numFirstHour + 1}`
              }else {
                  var a = `${numFirstHour} ~ ${numFirstHour + 1}`
              }
              b.push(a)
              numFirstHour++
            }
            b.forEach( (c) => {
              setBtnData( x => ([...x, c]))
            })
          }else { setTest("暫停開放") }
        }
      })
    }
  }  

  let onChange = (e) => {
    setValue(e)

    setCheckDay([]);
    setCheckDay( () => [e.getFullYear(), e.getMonth() + 1, e.getDate(), day[e.getDay()]] );
  };


  let btnColor = (e) => {
    if ( e.target.style.backgroundColor == "green" ) {
        e.target.style.backgroundColor="red";
    }else {
        e.target.style.backgroundColor="green";
    }
  }


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Calendar
            onChange={onChange}
            value={value}
            minDate={new Date()}
            maxDate={new Date(maxDate)}
          />
        </div>
        <div className="col-lg-6 align-self-center">
          <div className='container text-center'>
              <h4>收費方式</h4>
              <br />
              <p> 正常時段：$ {news && news.price} / {news && news.pricepertime}</p>
              <p></p>
          </div>
        </div>
      </div>
      <div className='row justify-content-start mt-3'>
        <h5 className="col-lg-12 text-center mt-3">{test}</h5>
          {
            btnData.map( (value, idx) => {
              return (
                <div className='col-lg-4 my-1' key={idx}>
                  <button className="btn w-100 p-1 " onClick={btnColor} checked={false} 
                    style={{backgroundColor: "red", border: "black solid 3px"}} >
                  {value}</button>
                </div>
              )
            })
          }
      </div>
    </div>
  )

}

export default Monthly;
