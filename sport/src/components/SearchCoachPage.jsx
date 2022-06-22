import React, { Component } from 'react';
import Card from './Card';
import Citys from './Citys';
import SportList from './SportList'
import '../css/search.css';
import '../js/search.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
// import { text } from '@fortawesome/fontawesome-svg-core';
class SearchCoachPage extends Component {
    state={
        sportList: [{ id: 1, value: 'yoga', cName: '瑜珈', chkicon: faTimes, color:'text-danger' },
                    { id: 2, value: 'workout', cName: '健身', chkicon: faTimes, color:'text-danger' }]
    }

    style = {
        'display': 'none'
    }

    // 清除縣市
    clearCity = () => {
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        this.setState({});
    }

    // 清除星期
    clearWeek = () => {
        // document.getElementsByName('week')[0].checked = true
        // console.log(document.getElementsByName('week'));
        var week = document.getElementsByName('week');
        for (var i = 0; i < week.length; i++) {
            week[i].checked = false;
        }
        var labelforweek = document.querySelectorAll('input[name="week"]+label.form-control.text-center.mt-1');
        for (i = 0; i < labelforweek.length; i++) {
            labelforweek[i].className = 'form-control text-center mt-1';
        }
        this.setState({});
    }

    // 清除日期
    clearTime = () => {
        document.getElementsByName('classTime')[0].value = '';
        document.getElementsByName('classTime')[1].value = '';
        this.setState({});
    }

    // 清除所選價格
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

    // 更改運動類別 icon
    sportListOnclick = (e) => {
        let sportList = this.state.sportList
        
        sportList.map(elm => {
            if (e.target.id == elm.value) {
                // 若icon為 XX
                if (e.target.checked == true) {
                    document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>&nbsp;';
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                }// 若icon為 vv
                else if (e.target.checked == false) {
                    document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>&nbsp;';
                    elm.chkicon = faTimes;
                    elm.color = 'text-danger';
                }
                this.setState({});
            }
        })
    }

    // 清除sportType
    clearSportType = () => {
        let sportList = this.state.sportList
        sportList.map(elm => {
            elm.chkicon = faTimes;
            elm.color = 'text-danger';
        })
        this.setState({});
    }

    // 清除所選時間範圍
    clearRange = () => {
        document.getElementsByName('timeRange')[0].value = 50;
        this.setState({});
    }
    
    // 清除所選人數
    clearPeople = () => {
        document.getElementsByName('people')[0].checked = false;
        document.getElementsByName('people')[1].checked = false;
        this.setState({});
    }

    // 清除總表單
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


                            {/* 縣市 */}
                            <div className='d-flex justify-content-between mt-3'>
                                <span>地區</span>
                                <span onClick={this.clearCity} className='btn text-secondary'>清除</span>
                            </div>                            
                            <Citys />

                            {/* 日期範圍 */}
                            <div className='d-flex justify-content-between mt-3'><span>日期</span><span onClick={this.clearTime} className='btn text-secondary'>清除</span></div>
                            <input className='form-control' name='classTime' type="date" /> ~<input className='form-control' name='classTime' type="date" />

                            {/* 星期幾 */}
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


                            {/* 所選時段 */}
                            <div className='d-flex justify-content-between mt-3'><span>時段</span><span onClick={this.clearRange} className='btn text-secondary'>清除</span></div>
                            <input name='timeRange' type="range" />

                            {/* 價錢 */}
                            <div className='d-flex justify-content-between mt-3'><span>價錢</span><span onClick={this.clearPrice} className='btn text-secondary'>清除</span></div>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 0 ~ $ 500 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 501 ~ $ 1,000 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 1,001 ~ $ 2,000 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 2,001 ~ $ 3,000 </label>
                            <label name='price' className='form-control text-center mt-1'><input type="radio" name='price' className='d-none' /> $ 3000 ~ 以上</label>


                            {/* 運動類別 */}
                            <SportList datas={this.state.sportList}
                                       sportListOnclick={(e)=>this.sportListOnclick(e)}
                                       clearSportType={this.clearSportType}/>

                            {/* 上課模式 */}
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