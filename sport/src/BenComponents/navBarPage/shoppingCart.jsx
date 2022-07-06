import React, { Component } from 'react';
import '../../scss/all.css';
import Axios from 'axios';
import $ from "jquery";
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
        place:[
            {pid:null,titles:"",addrs:"",infos:"",sun:"",mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",prices:""}
        ]
    }

    async componentDidMount(){
        await Axios.get(`http://localhost:3000/#/coursesAndVenues${this.props.id}`).then(response =>{
            var coursesAndVenues = response.data;
            console.log(typeof(coursesAndVenues));
            // $("#test").val(coursesAndVenues);



            // 點擊加入購物車取得商品localStorage資料 
            var retrievedObject =localStorage.getItem('place');
            var retrievedObjectA = JSON.parse(retrievedObject);
            // console.log(retrievedObjectA[0].id)
            var a = retrievedObjectA[0].id;
            $("#test").text(a);

        
        })
    }
    
    render() { 

        // var a =[];
        // a = localStorage.getItem("place");
        // this.setState({commodityValue:a.map((e) => <li>{e.id}</li>)})
        // this.setState({a})
        // var b = this.state.commodityValue.map((e) => <li>{e.id}</li>);
        // console.log(a);
        // console.log(b);

        // 點擊加入購物車取得商品localStorage資料 
        // var retrievedObject = JSON.parse(localStorage.getItem('place'));
        var retrievedObject =localStorage.getItem('place');
        var retrievedObjectA = JSON.parse(retrievedObject);
        console.log(retrievedObjectA[0].id)
        var a = retrievedObjectA[0].id;
        $("#test").val(a);
        

        console.log(typeof(retrievedObject));
        console.log(retrievedObject[0].id);
        // var pid = retrievedObject[0].id;
        // console.log(retrievedObject[1].id);

        // $("#test").text(retrievedObject[0].id);
        // $("#test").val(retrievedObject[0].id);
        // $("#test").html(retrievedObject[0].id);

        // console.log('place:', JSON.parse(retrievedObject));
        // console.log(typeof(retrievedObject));

        // var retrievedObject = localStorage.getItem('name');
        // var test2 = retrievedObject.forEach();

        // var localId = localStorage.id = this.props.id;
        // localStorage.title = this.props.title   ;

        $('#test2').on('click',function(){
            alert("OK");
        })

        return (
            <>
                測試購物車頁面
                <hr />
                {/* {this.state.commodityValue} */}
                {/* <input type="text" value={localStorage.getItem("place")} /> */}
                {/* {this.state.commodityValue.map((e,index)=>{
                    return {e}
                })} */}

                {/* {localStorage.place} */}
                <hr/>
                {/* {localStorage.key(this.id)} */}
                {/* {localStorage.key(this.localId)} */}
                <hr />
                {/* {JSON.parse(retrievedObject)} */}
                {/* {localStorage.key(localStorage.title.data)} */}
                {/* {test2} */}
                <div id="test">123</div>
                <button id="test2">測試按鈕</button>
                {/* {retrievedObjectA.id} */}
                {/* {this.state.commodityValue} */}
                {/* {JSON.parse(this.state.commodityValue)} */}
                
            </>
        );
    }
}
 
export default ShoppingCart;