import React, { Component } from 'react';
import Card from './Card';
import Citys from './Citys';
import '../css/search.css';
import '../js/search.js';
class SearchCoachPage extends Component {
    state = {

    }
    style = {
        'display': 'none'
    }
    clearCity = () => {
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        this.setState({});
    }
    clearWeek = () => {
        // document.getElementsByName('week')[0].checked = true
        // console.log(document.getElementsByName('week'));
        var week = document.getElementsByName('week');
        for (var i = 0; i < week.length; i++) {
            week[i].checked = false;
        }
        var labelforweek = document.querySelectorAll('input[name="week"]+label.form-control.text-center.mt-1');
        for (var i = 0; i < labelforweek.length; i++) {
            labelforweek[i].className = 'form-control text-center mt-1';
        }
        this.setState({});
    }
    clearTime = () => {
        document.getElementsByName('classTime')[0].value = '';
        document.getElementsByName('classTime')[1].value = '';
        this.setState({});
    }
    clearPrice = () => {
        var price = document.querySelectorAll('input[name="price"]');
        var labelPrice = document.querySelectorAll('label[name="price"]');
        for (var i = 0; i < price.length; i++) {
            price[i].checked = false;
            labelPrice[i].className = 'form-control text-center mt-1';
        }
        // document.querySelectorAll('input[name="price"]').parentNode()
        // parentNode
        this.setState({});
    }
    clearRange = () => {
        document.getElementsByName('timeRange')[0].value = 50;
        this.setState({});
    }
    clearSportType = () => {
        var sportType = document.getElementsByName('sportType');
        for (var i = 0; i < sportType.length; i++) {
            sportType[i].checked = false;
        }
        this.setState({});
    }
    clearPeople = () => {
        document.getElementsByName('people')[0].checked = false;
        document.getElementsByName('people')[1].checked = false;
        this.setState({});
    }
    clearForm = async () => {
        this.clearCity();
        this.clearForm();
        this.clearPeople();
        this.clearPrice();
        this.clearRange();
        this.clearSportType();
        this.clearTime();
        this.clearWeek();
    }
    render() {

        return (
            <div className='container'>
                <span>教練</span><span> / </span><span className='text-danger'>探索</span>
                <div className='row mt-3'>
                    <div className='col-3'>
                        <form className='mt-3 form-group'>
                            <div className='d-flex justify-content-between mt-3'>
                                <h3>篩選</h3>
                                <span onClick={this.clearForm} className='btn text-secondary'>全部清除</span>
                            </div>
                            <input className='form-control' type="search" placeholder="搜尋" />

                            <div className='d-flex justify-content-between mt-3'>
                                <span>地區</span>
                                <span onClick={this.clearCity} className='btn text-secondary'>清除</span>
                            </div>
                            <Citys />

                            <div className='d-flex justify-content-between mt-3'><span>日期</span><span onClick={this.clearTime} className='btn text-secondary'>清除</span></div>
                            <input className='form-control' name='classTime' type="date" /> ~<input className='form-control' name='classTime' type="date" />

                            <div className='d-flex justify-content-between mt-3'><span>星期</span><span onClick={this.clearWeek} className='btn text-secondary'>清除</span></div>

                            <input type="checkbox" id="mon" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="mon"> 星期一</label>
                            <input type="checkbox" id="tues" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="tues"> 星期二</label>
                            <input type="checkbox" id="wed" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="wed"> 星期三</label>
                            <input type="checkbox" id="thur" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="thur"> 星期四</label>
                            <input type="checkbox" id="fri" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="fri"> 星期五</label>
                            <input type="checkbox" id="sat" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="sat"> 星期六</label>
                            <input type="checkbox" id="sun" name="week" style={this.style} />
                            <label className='form-control text-center mt-1' htmlFor="sun"> 星期日</label>



                            <div className='d-flex justify-content-between mt-3'><span>時段</span><span onClick={this.clearRange} className='btn text-secondary'>清除</span></div>
                            <input name='timeRange' type="range" />

                            <div className='d-flex justify-content-between mt-3'><span>價錢</span><span onClick={this.clearPrice} className='btn text-secondary'>清除</span></div>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 0 ~ $ 500 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 501 ~ $ 1,000 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 1,001 ~ $ 2,000 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 2,001 ~ $ 3,000 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 3000 ~ 以上</label>

                            <div className='d-flex justify-content-between mt-3'><span>類別</span><span onClick={this.clearSportType} className='btn text-secondary'>清除</span></div>
                            <input type="checkbox" id="yoga" name="sportType" />
                            <label htmlFor="yoga" className='m-1'>瑜珈</label><br />
                            <input type="checkbox" id="workout" name="sportType" />
                            <label htmlFor="workout" className='m-1'>健身</label>

                            <div className='d-flex justify-content-between mt-3'><span>人數</span><span onClick={this.clearPeople} className='btn text-secondary'>清除</span></div>
                            <div>
                                <label><input type="radio" name='people' /> 一對一</label> <br />
                                <label><input type="radio" name='people' /> 一對多</label>
                            </div>

                            <input className='mt-3' type="submit" value={'顯示結果'} />

                        </form>
                    </div>
                    <div className='col-9 border-end border-start'>
                        <div className='row text-center'>
                            <a className='col-6 shadow btn bg-black text-white' href="/">找課程</a>
                            <a className='col-6 shadow btn' href="/site">找場地</a>
                        </div>
                        <div className='row mt-5 justify-content-center'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default SearchCoachPage;