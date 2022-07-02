import React, { Component } from 'react';
import '../../scss/all.css';
// import SearchSitePage from '../siteSearch/SearchSitePage.jsx'
// import Card from "../siteSearch/Card.jsx";
import CardTest from "../siteSearch/CardTest.jsx";
import Card from "../siteSearch/Card.jsx"

class ShoppingCart extends Component {
    state = { 
        commodityValue:[
            localStorage.getItem("place"),
            // JSON.parse(localStorage.getItem("place",JSON.stringify(this.props.place)))
        ],
    }

  
    
    render() { 

        // var a =[];
        // a = localStorage.getItem("place");
        // this.setState({commodityValue:a.map((e) => <li>{e.id}</li>)})
        // this.setState({a})
        // var b = this.state.commodityValue.map((e) => <li>{e.id}</li>);
        // console.log(a);
        // console.log(b);

        return (
            <>
                測試購物車頁面
                <hr />
                {/* {this.state.commodityValue} */}
                {/* <input type="text" value={localStorage.getItem("place")} /> */}
                {/* {this.state.commodityValue.map((e,index)=>{
                    return {e}
                })} */}

                {/* {this.state.commodityValue} */}
                {/* {JSON.parse(this.state.commodityValue)} */}
                
            </>
        );
    }
}
 
export default ShoppingCart;