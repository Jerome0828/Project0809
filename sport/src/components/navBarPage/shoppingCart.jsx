import React, { Component } from 'react';
import '../../scss/all.css';
// import SearchSitePage from '../siteSearch/SearchSitePage.jsx'
// import Card from "../siteSearch/Card.jsx";
import CardTest from "../siteSearch/CardTest.jsx";


class ShoppingCart extends Component {
    state = { 
        commodityValue:[
            localStorage.getItem("place"),
            // JSON.parse(localStorage.getItem("place"))
        ],
     } 
    render() { 
        return (
            <>
            
                測試購物車頁面
                <hr />
                {this.state.commodityValue}
                {/* {JSON.parse(this.state.commodityValue)} */}
             
            </>
        );
    }
}
 
export default ShoppingCart;