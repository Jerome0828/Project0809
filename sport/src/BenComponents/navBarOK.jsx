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
// import Venues from '../JeromeComponents/venues/venues';
// import Course from '../JeromeComponents/course/course.jsx';
import CVPage from '../JeromeComponents/CVPage/CVPage';

// 會員頁 0709 DONG新增
import MemberInfo from '../DongComponents/MemberInfo';
import MemberPost from '../DongComponents/MemberPost';
import MemberPlan from '../DongComponents/MemberPlan';
import EditLesson from '../DongComponents/EditLesson';
import EditPlace from '../DongComponents/EditPlace';


// 成為教練
import BeCoach from '../DongComponents/BeCoach.jsx';
// 租場地
import RentPlace from '../DongComponents/RentPlace.jsx';
// 會員登入及註冊
import login from '../JeromeComponents/login/login.jsx';

// 購物車頁面
import ShoppingCart from './navBarPage/shoppingCart.jsx';

// 購物車測試頁面
import shoppingCartPage from './navBarPage/shoppingCartPage.jsx'

// chat
import chat from '../DongComponents/chat/Chat.jsx'
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
                        <Route path="/" component={home} exact />

                        {/* 課程與場地路由,預設課程頁面 */}
                        <Route path="/lesson" component={SearchCoachPage} exact />
                        <Route path="/lesson/:lid" component={CVPage} exact />
                        <Route path="/site" component={SearchSitePage} exact />
                        <Route path="/site/:pid" component={CVPage} exact />

                        {/* 成為教練 */}
                        <Route path="/BeCoach" component={BeCoach} exact />

                        {/* 租場地 */}
                        <Route path="/RentPlace" component={RentPlace} exact />

                        {/* 會員登錄 */}
                        <Route path="/login" component={login} exact />

                        {/* 購物車 */}
                        <Route path="/shoppingCart/:id" component={ShoppingCart} />

                        {/* 測試購物車二頁面 */}
                        <Route path="/shoppingCartPage" component={shoppingCartPage} exact />

                        {/* 會員頁 0709 DONG新增 */}
                        <Route path="/member/:id" component={MemberPlan} exact />
                        <Route path="/member/info/:id" component={MemberInfo} exact />
                        <Route path="/member/post/:id" component={MemberPost} exact />
                        <Route path="/member/plan/:id" component={MemberPlan} exact />
                        <Route path="/member/editl/:id/:lid" component={EditLesson} exact />
                        <Route path="/member/editp/:id/:pid" component={EditPlace} exact />

                        {/* Chat */}
                        <Route path="/chat" component={chat} exact />

                    </Switch>
                    <div />
                </div>
            </BrowserRouter>
        );
    }
}

export default NavBarOK;