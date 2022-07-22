import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";  // npm remove react-calendar
import "react-calendar/dist/Calendar.css";

import axios from 'axios';

function Monthly(props) {
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; // 月曆(星期幾)與資料庫對應

  const [oder, setOder] = useState([0, 0]); // 訂單資訊
  const [btnData, setBtnData] = useState([]); // 按鈕value
  const [test, setTest] = useState([]); // 場地無開放提示
  const [news, setNews] = useState(undefined);// news: 資料庫(place)資訊
  const [maxDate, setMaxDate] = useState(""); // 月曆最大期限
  const [value, setValue] = useState(new Date()); // 月曆的值
  const [checkDay, setCheckDay] = useState([
    new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), day[new Date().getDay()]
  ]); // 月曆點選日期(預設今天)

  // 設定月曆最大期限
  useEffect( () => {
    let month = new Date().getMonth() + 2;
    let tod = new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
    setMaxDate(tod);
  }, [])

  // 傳入news, 取資料
  useEffect( () => {
    setNews(props.news)

    const Qs = require("qs")
    async function post() {
      await axios.post("http://localhost:80/spost/JerpmePHP/monthlyButton.php", Qs.stringify({ pid: `${props.pid && props.pid}` }))
      .then( response => {
        if ( typeof response.data == "object" ) {
          // 預設
          button(response.data)
        }
      })
    }
    post()
  }, [props])

  // 月曆日期變動
  useEffect( () => {
    button(news)
  }, [checkDay])

  // 按鈕value設定
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

  // 月曆點選更新日期
  let onChange = (e) => {
    setValue(e)

    setCheckDay( () => [e.getFullYear(), e.getMonth() + 1, e.getDate(), day[e.getDay()]] );
  };

  // 按鈕選取時改變
  let btnColor = (e) => {
    if ( e.target.style.backgroundColor == "green" ) {
        e.target.style.backgroundColor="red";
        e.target.checked = false;
    }else {
        e.target.style.backgroundColor="green";
        e.target.checked = true;
    }
    btnCheck()
  }

  // 讀取所有按鈕的值()
  let btnCheck = (e) => {
    let btn = document.getElementsByClassName('btnDiv');
    let a = []
    Object.keys(btn).map( (val) => {
      if ( btn[val].checked === true ) {
        a.push( btn[val].value )  
      }
    })
    // v1
    a.map( (val) => {
      setOder( () => [news.title, news.price])
      oder.push(val)
    })
    // v2
    // setOder( () => [news.title, news.price, a])
    

    // title 價錢 時間
    if ( e.target.value == '加入購物車') {
      console.log(oder)
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
              <button className="btn w-75 mt-3 bg-info" onClick={btnCheck} value='加入購物車'>加入購物車</button>
          </div>
        </div>
      </div>
      <div className='row justify-content-start mt-3'>
        <h5 className="col-lg-12 text-center mt-3">{test}</h5>
          {
            btnData.map( (values, idx) => {
              return (
                <div  className='col-lg-4 my-1' key={idx}>
                  <button className="btn w-100 p-1 btnDiv" onClick={btnColor} checked={false} value={values}
                    style={{backgroundColor: "red", border: "black solid 3px"}} >
                  {values}</button>
                </div>
              )
            })
          }
      </div>
    </div>
  )

}

export default Monthly;
