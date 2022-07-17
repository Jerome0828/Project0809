import React, { Component } from 'react';
import Axios from 'axios';

// [{"carid":"10","oid":"p01","id":"1","title":"123","date":"2022-07-15","time":"10:00 ~ 11:00","price":"300"},

class ShoppingCart extends Component {
    state = { 
        carData:[],
        carid:[],
     } 

    async componentDidMount() {
        var url = `http://localhost:80/spost/BenPHP/shoppingCartGet.php`;
        var result = await Axios.get(url);
        this.state.carData = result.data;
        this.setState({});
        // console.log(this.state.carData)

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
    deleCar= async (e)=>{
        // (0)模擬點擊刪除不要的值
        // this.state.carData.splice(0,1);  
        // this.setState({});
        // console.log(this.state.carData);

        // (1)取得點擊商品的e值
        // (1)取得點擊商品的e.target值
        // console.log(e);
        // console.log(e.target);

        // (2)取得點擊商品的value.carid的數字
        // console.log(e.target.getAttribute('data_car'))
        const carID = e.target.getAttribute('data_car');
        // console.log(carID);

        // 將值送進PHP資料庫當作刪除的唯一key(carid)值  (用QS 或者改用from表單傳送)
        // 使用QS傳送字串到PHP內
        const Qs = require('qs')
        let tempData ='';   //新增變數初始化字串
        await Axios.post(`http://localhost:/spost/BenPHP/shoppingCartDele.php`,Qs.stringify({ carID:carID}))
        .then((response)=>{
            // console.log(response.data); //查看回傳的內容是個字串
            tempData = response.data;      //放到外層變數,用於外層判斷
            // this.setState({});    
        })
        // 查看撈回來的資料是陣列,所以要使用while、for、map、forEach做尋訪,前兩者要自己寫索引值所以不推薦
        // 在下方判斷後做新增或刪除處理,最後在下setState更新內容
        this.state.carData.map((elm,idx)=>{
            // console.log(elm)  //在裡面看是物件,但是要處理的是外面的值(陣列),所以沒關係
            // console.log('tenp :' + tempData) 

            // 要做到php刪除資料後連同React畫面更新,將回傳的carid做判斷,當==時做刪除
            if (tempData == elm.carid){
                // console.log(idx);
                // console.log(this.state.carData[idx]) //這邊查看的是外部陣列[0,1,2,3]
                this.state.carData.splice(idx,1)
                this.setState({})
            }
            // console.log("NO")
        })
        
        // 使用from表單傳送內容到php (待處理)
        // var deleUrl = `http://localhost:/spost/BenPHP/shoppingCartDele.php/${carID}`;
        // var deleUrl = `http://localhost:/spost/BenPHP/shoppingCartDele.php`;
        // var result = await Axios.post(deleUrl,{data:carID});
        // this.state.carData = result.data;
        // this.setState({});
        // console.log(this.state.carData)


        // 預計送入資料庫內容
        // 
    };
    
    
    render() { 
        // console.log(this.state.data)
        
        return (
            <>
                <div className='mt-6 '>
                        <p>購物車頁面</p>
                </div>

                {this.state.carData.map((value,index)=>{
                    return(
                        <>
                        <div className='container'>
                            <div className='row bg bg-test mt-2 '>
                                <div className="cartitle col bg-test1">
                                    <p>{value.title}</p>

                                </div>
                                <div className="cardata  col">
                                <a >{value.date}{value.time}</a>
                                    
                                    </div>
                                <div className="carprice col bg-test1">{value.price}</div>
                                <button className='col' name="deleCar"onClick={this.deleCar} type="submit" data_car={value.carid}>{value.carid}移除</button>
                            </div>
                        </div>
                        </>
                    )
                })}


            </>
        );
    }
}
 
export default ShoppingCart;