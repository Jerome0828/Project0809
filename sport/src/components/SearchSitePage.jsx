import React, { Component } from 'react';
import Card from './Card';
import Citys from './Citys';
import '../css/search.css';
import '../js/search.js';
class SearchSitePage extends Component {
    state = {}

    render() {
        return (
            <div className='container'>
                <span>場地</span><span> / </span><span className='text-danger'>探索</span>
                <div className='row mt-3'>
                    <div className='col-3 border'>
                        <h3>篩選</h3>
                        <form className='mt-3'>
                            <input type="text" placeholder="搜尋" />

                            <div className='d-flex justify-content-between mt-3'><span>地區</span><span className='text-secondary'>清除</span></div>
                            <Citys />

                            <div className='d-flex justify-content-between mt-3'><span>日期</span><span className='text-secondary'>清除</span></div>
                            <input type="date" /> ~<input type="date" />

                            <div className='d-flex justify-content-between mt-3'><span>星期</span><span className='text-secondary'>清除</span></div>
                            <input type="checkbox" id="mon" name="mon" />
                            <label for="mon" className='m-1'> 星期一</label><br />
                            <input type="checkbox" id="tues" name="tues" />
                            <label for="tues" className='m-1'> 星期二</label><br />
                            <input type="checkbox" id="wed" name="wed" />
                            <label for="wed" className='m-1'> 星期三</label><br />
                            <input type="checkbox" id="thur" name="thur" />
                            <label for="thur" className='m-1'> 星期四</label><br />
                            <input type="checkbox" id="fri" name="fri" />
                            <label for="fri" className='m-1'> 星期五</label><br />
                            <input type="checkbox" id="sat" name="sat" />
                            <label for="sat" className='m-1'> 星期六</label><br />
                            <input type="checkbox" id="sun" name="sun" />
                            <label for="sun" className='m-1'> 星期日</label><br />

                            <div className='d-flex justify-content-between mt-3'><span>時段</span><span className='text-secondary'>清除</span></div>
                            <input type="range" />

                            <div className='d-flex justify-content-between mt-3'><span>價錢</span><span className='text-secondary'>清除</span></div>
                            <label><input type="radio" name='price' /> $ 0 ~ $ 500 </label><br />
                            <label><input type="radio" name='price' /> $ 501 ~ $ 1,000 </label><br />
                            <label><input type="radio" name='price' /> $ 1,001 ~ $ 2,000 </label><br />
                            <label><input type="radio" name='price' /> $ 2,001 ~ $ 3,000 </label><br />
                            <label><input type="radio" name='price' /> $ 3000 ~ 以上</label>

                            <div className='d-flex justify-content-between mt-3'><span>類別</span><span className='text-secondary'>清除</span></div>
                            <input type="checkbox" id="yoga" name="sun" />
                            <label for="yoga" className='m-1'>瑜珈</label><br />

                            <div className='d-flex justify-content-between mt-3'><span>人數</span><span className='text-secondary'>清除</span></div>
                            <label><input type="radio" name='people' /> 一對一</label> <br />
                            <label><input type="radio" name='people' /> 一對多</label>

                            <input className='mt-3' type="submit" value={'顯示結果'} />

                        </form>
                    </div>
                    <div className='col-9 border '>
                        <div className='row text-center'>
                            <a className='col-6 shadow btn' href="/">找課程</a>
                            <a className='col-6 shadow btn bg-black text-white' href="/site">找場地</a>
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

export default SearchSitePage;