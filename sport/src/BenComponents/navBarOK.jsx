import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../scss/all.css';

// 導覽列物件
import NavBarContent1 from './navBarContentTest';
// 首頁
import home from './navBarPage/home.jsx'; 
// 課程與場地(預設教練頁)
import SearchCoachPage from '../DongComponents/SearchCoachPage.jsx';
import SearchSitePage from '../DongComponents/SearchSitePage.jsx';
import Course from '../JeromeComponents/course/course.jsx';
import Venues from '../JeromeComponents/venues/venues';

// 會員頁 0709 DONG新增
import MemberPage from '../DongComponents/MemberPage.jsx';
import MemberInfo from '../DongComponents/MemberInfo';
import MemberPost from '../DongComponents/MemberPost';
import MemberPlan from '../DongComponents/MemberPlan';

// 成為教練
import BeCoach from '../DongComponents/BeCoach.jsx';
// 租場地
import RentPlace from '../DongComponents/RentPlace.jsx';
// 會員登入及註冊
import login from '../JeromeComponents/login/login.jsx';
// 購物車頁面
import ShoppingCart from './navBarPage/shoppingCart.jsx';

class NavBarOK extends Component {
    state = { 

    } 

    render() { 
        return (
            <BrowserRouter>
            <div >

            <NavBarContent1 />
            </div>
                <div>
                <Switch>
                    <Route path="/" component={home} exact/>

                    {/* 課程與場地路由,預設課程頁面 */}
                    <Route path="/lesson" component={SearchCoachPage} exact/>
                    <Route path="/lesson/:lid" component={Venues} exact />
                    <Route path="/site" component={SearchSitePage} exact/>
                    <Route path="/site/:pid" component={Course} exact />

                    {/* 成為教練 */}
                    <Route path="/BeCoach" component={BeCoach} exact/>

                    {/* 租場地 */}
                    <Route path="/RentPlace" component={RentPlace} exact/>

                    {/* 會員登錄 */}
                    <Route path="/login" component={login} exact/>

                    {/* 購物車 */}
                    <Route path="/shoppingCart" component={ShoppingCart}/>

                    {/* 會員頁 0709 DONG新增 */}
                    <Route path="/member" component={MemberPlan} exact/>
                    <Route path="/member/info" component={MemberInfo} exact/>
                    <Route path="/member/post" component={MemberPost} exact/>
                    <Route path="/member/plan" component={MemberPlan} exact/>

                </Switch>
                <div/>

                {/* 設定視窗定位按鈕 */}
                <div className='homeRightFixedBox d-flex '>


                        <div className='homeRightFixedBoxV1 container '>

                            {/* 聊天按鈕 */}
                            <div className='mt-2 homeRightFixedBoxV2 rounded-circle container '>
                                <div className='homeRightFixedBoxText mt-2 mb-2 '>
                                    <NavLink to="/rentSpace">
                                    <svg style={{color:'#0084ff'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
                                    <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
                                    </svg>

                                    
                                   
                                    </NavLink>
                                    
                                </div>

                            </div>

                            {/* 購物車按鈕 */}
                            <div className='mt-2 homeRightFixedBoxV2 rounded-circle container '>
                                <div className='homeRightFixedBoxText mt-2 mb-2'>
                                    {/* 設定路由路徑 */}
                                    <NavLink to="/shoppingCart">
                                    <svg style={{color:'#a0ac48'}}xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>

                                    </svg>

                                    <span class="position-absolute top-15 start-90 translate-middle badge rounded-pill bg-secondary">+99</span>
                                    
                                    
                                    </NavLink>
                                    
                                </div>

                            </div>
        

                         </div>


                </div>
                 
            </div>
            </BrowserRouter>
        );
    }
}
 
export default NavBarOK;