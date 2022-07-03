import React, { Component } from "react";
import Calendar from "react-calendar"; // npm remove react-calendar
import "react-calendar/dist/Calendar.css";

import MonthlyButton from "./monthlyButton";

class Monthly extends Component {
  state = { value: new Date(), maxDate: "", mon: '08~22', b: []};

  componentDidMount = () => {
    let month = new Date().getMonth() + 2;
    let tod = new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
    this.state.maxDate = tod;
    this.setState({});
  };

  onChange = (e) => {
    this.state.value = e;
    this.setState({});
  };


  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Calendar
              onChange={this.onChange}
              value={this.state.value}
              minDate={new Date()}
              maxDate={new Date(this.state.maxDate)}
            />
          </div>
          <div className="col-lg-6 align-self-center">
            <div className='container text-center'>
                <h4>收費方式</h4>
                <br />
                <p> 正常時段：$ 300 / 60 分鐘，最低購買次數為 1 次購買滿 30 次，每次折扣 $ 100。</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12 border">
            <div className="">
              <table className='table'>
                  <tbody>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monthly;
