import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";  // npm remove react-calendar
import "react-calendar/dist/Calendar.css";

import axios from 'axios';

function Monthly(props) {
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; // 月曆(星期幾)與資料庫對應

  const [oder, setOder] = useState([]); // 訂單資訊
  const [dateDay, setDateDay] = useState([]); // 單日
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
    button(props.news)
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
                  var a = `0${numFirstHour}:00 ~ 0${numFirstHour + 1}:00`
              }else if ( numFirstHour < 10 && numFirstHour+1 == 10 ){
                  var a = `0${numFirstHour}:00 ~ ${numFirstHour + 1}:00`
              }else {
                  var a = `${numFirstHour}:00 ~ ${numFirstHour + 1}:00`
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

    let btn = document.getElementsByClassName('btnDiv');
    Object.keys(btn).map( (val) => {
      if ( btn[val].style.backgroundColor == "green" ) {
        btn[val].style.backgroundColor = "red";
        btn[val].checked = false;
      }
    })
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
    btnCheck(e)
  }

  // 讀取所有按鈕的值()
  let btnCheck = (e) => {
    setDateDay([])

    let btn = document.getElementsByClassName('btnDiv');
    Object.keys(btn).map( (val) => {
      if ( btn[val].checked === true ) {
        setDateDay( (old) => [...old, btn[val].value])
      }
    })
  }

  // 加入購物車
  let shoppingCar = () => {
    dateDay.map( (val) => {
      setOder( (old) => [...old, val])
    })
    shoppingCarIn()
  }

  // 寫入購物車 (資料庫)
  let shoppingCarIn = () => {
    const Qs = require("qs")
    dateDay.map( (times) => {
      async function post() {
        await axios.post("http://localhost:80/spost/JeromePHP/shoppingcar.php", 
          Qs.stringify({
            oid: news.pid,
            id: '1',
            title: news.title,
            date: `${checkDay[0]}-${checkDay[1]}-${checkDay[2]}`,
            time: times,
            price: news.price
          }))
        // .then( response => {
        //     setNews(response.data)
        // })
      }
      post()
    })
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
        <div className="col-lg-6">
          <div className="row text-center mt-2">
              <h4 className="col-lg-4">收費方式</h4>
              <span className="col-lg-8 my-1">正常時段：$ {news && news.price} / {news && news.pricepertime}</span>
              <div className="col-lg-12 text-end bg-info">
                <h4 className="my-1">{`${checkDay[1]} / ${checkDay[2]}`}</h4>
              </div>
          </div>
          <div className="row h-75 border">
            <div className="col-lg-12 ">
              {dateDay.map( (day) => { return ( <p>{day}</p> ) })}
            </div>
            <div className='border h-25'>
                <button className="btn w-100 bg-info" onClick={shoppingCar} value='加入購物車'>加入購物車</button>
            </div>
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
