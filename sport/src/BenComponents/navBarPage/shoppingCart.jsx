import React, { Component } from 'react';
import Axios from 'axios';

class ShoppingCart extends Component {
    state = { 
        date:[]
     } 

     async componentDidMount() {
        var url = `http://localhost/spost/DongPHP/lesson.php`;
        var result = await Axios.get(url);
        this.state.data = result.data;
        this.setState({});
        // console.log(this.state.data)

        // var url1 = `http://localhost/spost/DongPHP/sportType.php`;
        // var result1 = await Axios.get(url1);
        // this.state.sportType = result1.data;
        // let sportType = this.state.sportType;
        // sportType.map((elm,idx)=>{
        //     elm.className = 'text-black';
        //     elm.chkicon = faTimes;
        //     elm.id = `type${idx}`;
        // })
        // this.setState({});
    }

    
    render() { 


        // console.log(this.state.data)

        return (

            <>
            123
            </>
        );
    }
}
 
export default ShoppingCart;