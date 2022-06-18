import React, { Component } from 'react';
import Citys from './Citys';
class BeCoach extends Component {
    state = {}
    render() {
        return (
            <div className="container mt-3">
                <h3>成為教練</h3>
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
                    <div className="  mb-3 mt-1">
                        <input type="file" className="form-control" required />
                    </div>

                    {/* 課程名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程名稱 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    建議輸入較有區別性與特色的名稱，而非一對一教練課程
                                </li>
                                <li className="list-group-item">
                                    好的課程名稱除了可以讓您的課程更突出外，也會讓消費者在Google瀏覽器搜尋時更容易看到您的課程。
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1">
                        <input type="text" className="form-control" placeholder="請輸入課程名稱" required />
                    </div>

                    {/* 暱稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>暱稱 :</b>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1">
                        <input type="text" className="form-control" placeholder="請輸入暱稱" required />
                    </div>

                    {/* 真實姓名 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>真實姓名 :</b>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1">
                        <input type="text" className="form-control" placeholder="請輸入真實姓名" required />
                    </div>

                    {/* 電話 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>電話 :</b>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1">
                        <input type="number" className="form-control" placeholder="請輸入電話" required />
                    </div>

                    {/* 地址 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上課地點 :</b>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1" >
                        <Citys />
                        <input type="text" className="form-control" placeholder="請請輸入地址" required />
                    </div>

                    {/* 課程簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程簡介 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    簡介可敘述課程進行的模式，您與其他課程的區隔以及獨到之處，越豐富詳細的介紹，會讓您在Google等搜尋引擎中的自然排名有效提升。
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1">
                        <textarea class="form-control" rows="3" placeholder="輸入課程簡介" required></textarea>
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
                    <div className="  mb-3 mt-1">
                        <input type="date" className="form-control" required />
                        <p className="mt-3 mb-3">至</p>
                        <input type="date" className="form-control" required />
                    </div>

                    {/* 上課時間 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程長度 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="  mb-3 mt-1">
                        <input type="time" className="form-control" required />
                        <p className="mt-3 mb-3">至</p>
                        <input type="time" className="form-control" required />
                    </div>

                    {/* 分類 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>分類 :</b>
                        </li>
                    </ul>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">瑜珈</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label class="form-check-label" for="inlineCheckbox2">健身</label>
                    </div>

                    {/* 人數 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>模式 :</b>
                        </li>
                    </ul>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">一對一</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">一對多</label>
                    </div>

                    {/* 我同意 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>是否同意 :</b>
                        </li>
                    </ul>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                        <label className="form-check-label" for="myCheck">I agree on....</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default BeCoach;