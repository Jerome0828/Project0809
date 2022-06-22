import React, { Component } from 'react';
import Citys from './Citys';
class RentPlace extends Component {
    state = {}
    render() {
        let selectedOptionId = '';
        return (
            <div className="container mt-3">
                <h3>上傳場地</h3>
                <form className="was-validated form-group">

                    {/* 上傳圖片 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上傳圖片 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-3">
                        <input type="file" className="form-control" required={false} />
                    </div>

                    {/* 場地名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地名稱 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <input type="text" className="form-control" placeholder="請輸入場地名稱" required/>
                    </div>

                    {/* 場地地址 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>地址 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1" >
                        <Citys />
                        <input type="text" className="form-control" placeholder="請請輸入地址" required />
                    </div>

                    {/* 場地簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地介紹 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <textarea class="form-control" rows="3" placeholder="輸入場地簡介" required></textarea>
                    </div>

                    {/* 人數限制 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地人數限制 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <label>
                            <input type="number" className="form-control" placeholder="請輸入人數限制" required />
                        </label>
                    </div>

                    {/* 適用課程類別 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>適用課程類別 :</b>
                        </li>
                    </ul>
                    <div class="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="yoga" value="yoga" />
                        <label className="form-check-label" htmlFor="yoga">瑜珈</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input className="form-check-input" type="checkbox" id="workout" value="workout" />
                        <label className="form-check-label" htmlFor="workout">健身</label>
                    </div>

                    {/* 刊登日期 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>刊登日期 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-3">
                        <label>
                            <input type="date" className="form-control" required />
                        </label>
                        <p className="mt-3 mb-3">至</p>
                        <label>
                            <input type="date" className="form-control" required />
                        </label>
                    </div>


                    {/* 我同意 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>是否同意 :</b>
                        </li>
                    </ul>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                        <label className="form-check-label" htmlFor="myCheck">I agree on....</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </div>

                    <button type="submit" className="btn btn-outline-success">送出</button>
                    <button type="submit" className="btn btn-outline-danger mx-3">取消</button>
                </form>
            </div>
        );
    }
}

export default RentPlace;