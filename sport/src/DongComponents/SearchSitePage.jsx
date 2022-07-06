import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';
import Citys from './Citys';
import SportList from './SportList';
import WeekList from './WeekList';
import '../scss/all.css';
import '../js/dongJS/search.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link, NavLink } from "react-router-dom";

class SearchSitePage extends Component {
    state = {
        sportList: [{ id: 1, value: '瑜珈', cName: '瑜珈', chkicon: faTimes, color: 'text-balck' },
        { id: 2, value: '健身', cName: '健身', chkicon: faTimes, color: 'text-black' },
        { id: 3, value: '健身333333333', cName: '健身333333333', chkicon: faTimes, color: 'text-black' },
        { id: 4, value: '健身4', cName: '健身4', chkicon: faTimes, color: 'text-black' },
        { id: 5, value: '健身55555', cName: '健身55555', chkicon: faTimes, color: 'text-black' }],

        priceList: [{ key: 0, checked: false, price: '$0 ~ $500', className: 'd-none text-success' },
        { key: 1, checked: false, price: '$501 ~ $1000', className: 'd-none text-success' },
        { key: 2, checked: false, price: '$1001 ~ $2000', className: 'd-none text-success' },
        { key: 3, checked: false, price: '$2001 ~ $3000', className: 'd-none text-success' },
        { key: 4, checked: false, price: '$3001 ~ 以上', className: 'd-none text-success' }],

        peopleList: [{ key: 0, checked: false, value: '單人', className: 'd-none text-success' },
        { key: 1, checked: false, value: '團體', className: 'd-none text-success' }],

        weekList: [{ key: 1, id: 'mon', value: '星期一', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 2, id: 'tues', value: '星期二', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 3, id: 'wed', value: '星期三', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 4, id: 'thur', value: '星期四', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 5, id: 'fri', value: '星期五', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 6, id: 'sat', value: '星期六', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 7, id: 'sun', value: '星期日', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' }],

        rangeValue: [0, 100], timeValue: ['00 : 00', '24 : 00'],

        data:[]
    }
    // <label name='price' className='text-center mt-1'><input type="radio" name='price' className='d-none' /> 
    // <span ><FontAwesomeIcon className='d-none text-success' icon={faCheck} /></span>$ 3000 ~ 以上</label>
    myfaCheck = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check text-success" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'

    inputBoxStyle = {
        'color': 'balck',
        'padding': '5px',
        'border': '1px solid #00000050'
    }

    timeRangeStyle = {
        'color': 'balck',
        'padding': '5px',
        'border': '1px solid #00000050',
        'width':'32%'
    }
    submitStyle = {
        'padding': '5px',
        'border': '1px solid #00000050',
        'fontSize': '20px',
        'fontWeight': 'bold',
    }

    // 課程預設
    async componentDidMount() {        
        var url = `http://localhost/spost/coach.php`;
        var result = await Axios.get(url);
        this.state.data = result.data;        
        this.setState({});
        // console.log(this.state.data);
    }

    // 清除縣市
    clearCity = () => {
        console.log(this.state.data);
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        this.setState({});
    }

    // 清除星期
    clearWeek = () => {
        let weekList = this.state.weekList
        weekList.map(elm => {
            elm.chkicon = faTimes;
            elm.color = 'text-black';
        })
        this.setState({});
    }
    // weeklistonchange
    weekListOnclick = (e) => {
        let weekList = this.state.weekList;
        console.log(e.target.checked);
        weekList.map(elm => {
            if (e.target.id == elm.id) {
                // 若icon為 XX
                if (e.target.checked == true) {
                    document.querySelectorAll(`span[name=${elm.id}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>&nbsp;';
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                }// 若icon為 vv
                else if (e.target.checked == false) {
                    document.querySelectorAll(`span[name=${elm.id}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>&nbsp;';
                    elm.chkicon = faTimes;
                    elm.color = 'text-black';
                }
                this.setState({});
            }
        })
    }
    // 清除日期
    clearTime = () => {
        document.getElementsByName('weekBegin')[0].value = '';
        document.getElementsByName('weekEnd')[0].value = '';
        this.setState({});
    }

    // 清除所選價格
    clearPrice = () => {
        this.state.priceList.map((elm) => {
            elm.checked = false;
            elm.className = 'd-none text-success';
        })
        this.setState({});
    }

    // 點選價格更改樣式
    setPrice = (e) => {
        this.state.priceList.map((elm) => {
            console.log(e.target.value);
            if (e.target.value == elm.price) {
                elm.checked = true;
                elm.className = 'text-success';
            } else {
                elm.checked = false;
                elm.className = 'd-none text-success';
            }
        })
        this.setState({})
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
                    elm.color = 'text-black';
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
            elm.color = 'text-black';
        })
        this.setState({});
    }


    // 清除所選人數
    clearPeople = () => {
        this.state.peopleList.map((elm) => {
            elm.checked = false;
            elm.className = 'd-none text-success';
        })
        this.setState({});
    }

    setPeople = (e) => {
        this.state.peopleList.map((elm) => {
            console.log(e.target.value);
            if (e.target.value == elm.value) {
                elm.checked = true;
                elm.className = 'text-success';
            } else {
                elm.checked = false;
                elm.className = 'd-none text-success';
            }
        })
        this.setState({})
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

    // 清除所選時間範圍
    clearRange = () => {
        this.state.rangeValue[0] = 0;
        this.state.rangeValue[1] = 100;
        this.state.timeValue[0] = '00 : 00';
        this.state.timeValue[1] = '24 : 00';
        this.setState({});
    }

    handleChange = (e) => {
        this.state.rangeValue[0] = e.target.value[0];
        this.state.rangeValue[1] = e.target.value[1];
        this.state.timeValue[0] = `${Math.floor((24 * (e.target.value[0] / 100)))} : 00`;
        this.state.timeValue[1] = `${Math.floor((24 * (e.target.value[1] / 100)))} : 00`;
        // 時:((24*60*60)*(20/100))/24
        // 分:((24*60*60)*(20/100))/24/60
        this.setState({});
    }

    render() {

        return (
            <div className='container mt-6'>
                <span>場地</span><span> / </span><span className='text-danger'>探索</span>
                <div className='row mt-3'>
                    <div className='col-3'>
                        <form action="http://localhost/spost/form.php" method='POST' className='mt-3 form-group'>
                            <div className='d-flex justify-content-between mt-3'>
                                <h3>篩選</h3>
                                <span onClick={this.clearForm} className='btn text-secondary'>全部清除</span>
                            </div>
                            <input name='search' style={this.inputBoxStyle} className='shadow form-control' type="search" placeholder="搜尋" />


                            {/* 縣市 */}
                            <div className='d-flex justify-content-between mt-3'>
                                <span>地區</span>
                                <span onClick={this.clearCity} className='btn text-secondary'>清除</span>
                            </div>
                            <Citys style={this.inputBoxStyle} required={false}/>

                            {/* 日期範圍 */}
                            <div className='d-flex justify-content-between mt-3'><span>日期</span><span onClick={this.clearTime} className='btn text-secondary'>清除</span></div>
                            <input style={this.inputBoxStyle} className='shadow form-control' name='weekBegin' type="date" /> ~<input style={this.inputBoxStyle} className='shadow form-control' name='weekEnd' type="date" />

                            {/* 星期幾 */}
                            <WeekList datas={this.state.weekList}
                                style={this.inputBoxStyle}
                                weekListOnclick={(e) => this.weekListOnclick(e)}
                                clearWeek={this.clearWeek} />

                            {/* 所選時段 */}
                            <div className='d-flex justify-content-between mt-3'><span>時段</span><span onClick={this.clearRange} className='btn text-secondary'>清除</span></div>
                            <Box sx={{ width: 'auto' }}>
                                <br />
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={this.state.rangeValue}
                                    onChange={this.handleChange}
                                    valueLabelDisplay="off"
                                    getAriaValueText={this.valuetext}
                                    color="success"
                                />
                            </Box>
                            <div className='d-flex justify-content-between mt-3'>
                                <input name='timeRangeBegin' type="text" className='shadow rounded' style={this.timeRangeStyle} value={this.state.timeValue[0]}/>
                                <input name='timeRangeEnd' type="text" className='shadow rounded' style={this.timeRangeStyle} value={this.state.timeValue[1]}/>
                            </div>
                            {/* @mui/material/styles/createPalette.d.ts */}
                            {/* primary: PaletteColor;
                            secondary: PaletteColor;
                            error: PaletteColor;
                            warning: PaletteColor;
                            info: PaletteColor;
                            success: PaletteColor; */}
                            {/* https://mui.com/zh/material-ui/customization/palette/ */}
                            {/* <div className='d-flex justify-content-between mt-3'><span className='shadow rounded' style={this.inputBoxStyle}>{this.state.timeValue[0]}</span><span className='shadow rounded' style={this.inputBoxStyle}>{this.state.timeValue[1]}</span></div> */}

                            {/* 價錢 */}
                            <div className='d-flex justify-content-between mt-3'><span>價錢</span><span onClick={this.clearPrice} className='btn text-secondary'>清除</span></div>
                            <div className='w-100'>
                                {this.state.priceList.map(elm => {
                                    return (
                                        <>
                                            <label style={this.inputBoxStyle} name='price' className='w-100 shadow rounded text-center mt-1'>
                                                <input value={elm.price} onClick={this.setPrice} key={elm.key} type="radio" name='price' className='d-none' checked={elm.checked} />
                                                <span ><FontAwesomeIcon className={elm.className} icon={faCheck} />&nbsp;</span>{elm.price}</label><br />
                                        </>
                                    )
                                })}
                            </div>

                            {/* 運動類別 */}
                            <div className='text-center'>
                                <SportList datas={this.state.sportList}
                                    style={this.inputBoxStyle}
                                    sportListOnclick={(e) => this.sportListOnclick(e)}
                                    clearSportType={this.clearSportType} />
                            </div>
                            {/* 租借對象 */}
                            <div className='d-flex justify-content-between mt-3'><span>租借對象</span><span onClick={this.clearPeople} className='btn text-secondary'>清除</span></div>
                            <div className='w-100'>
                                {this.state.peopleList.map(elm => {
                                    return (
                                        <>
                                            <label style={this.inputBoxStyle} name='people' className="w-100 shadow rounded text-center mt-1">
                                                <input onClick={this.setPeople} key={elm.key} value={elm.value} type="radio" name='people' className='d-none' checked={elm.checked} />
                                                <span><FontAwesomeIcon className={elm.className} icon={faCheck} />&nbsp;</span>{elm.value}</label><br />
                                        </>
                                    )
                                })}
                            </div>

                            <input style={this.submitStyle} className='w-100 shadow rounded text-success btn mt-3' type="submit" value={'顯示結果'} />

                            <br /><br /><br />

                        </form>
                    </div>
                    <div className='col-9 border-end border-start'>
                        <div className='row text-center'>
                            <NavLink className='col-6 shadow btn ' to={"/coach"}>找課程</NavLink>
                            <NavLink className='col-6 shadow btn bg-black text-white' to={"/site"}>找場地</NavLink>
                        </div>
                        <div className='row mt-5 justify-content-center'>
                            <Card dataList={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchSitePage;