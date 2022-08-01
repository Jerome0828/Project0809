import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

class ShoppingCart extends Component {
    state = { 
        carData:[],
        carid:[],
        sumPrice:0,
        ChoosePayment:"",
        carDataTitle:[],
        oid:[],
        pid:"",
        carState:[],
     } 

    async componentDidMount() {
        if(localStorage.getItem('id')){

        var carId = localStorage.getItem('id');
        await Axios.post('http://localhost:80/spost/BenPHP/shoppingCartGet.php',carId)
        .then(result=>{
            this.state.carData = result.data;
        })
        // 07/22 BEN 新增 判斷購物車狀態碼 0 = 未結帳 , 1 = 已結帳 , 2 = 交易取消
        this.state.carData = this.state.carData.filter((value,index)=>{
            return value.State == 0 
        })

        this.state.sumPrice=0;
        for(var i=0;i<this.state.carData.length;i++){
            this.state.sumPrice += Number(this.state.carData[i].price);
        }

        this.setState({});
        }else  {
            window.location.href = '/login'
        }
        
    }
    deleCar= async (e)=>{
        const carID = e.target.getAttribute('data_car');
        const Qs = require('qs')
        let tempData ='';   
        await Axios.post(`http://localhost:/spost/BenPHP/shoppingCartDele.php`,Qs.stringify({ carID:carID}))
        .then((response)=>{
            console.log(response.data); 
            tempData = response.data;      
        })
        this.state.carData.map((elm,idx)=>{

            if (tempData == elm.carid){
                this.state.sumPrice -= elm.price 
                this.state.carData.splice(idx,1)
                this.setState({})
            }
            
        })

    };


    render() { 

    
        return (
            <>
                <div className='mt-6 container'>
                        <h3>購物車</h3>
                        <hr />
                        <div className='row m-auto' style={{justifyItems:'center',alignItems:'center',backgroundColor:'black',color:'white',height:'50px',fontSize:'20px',borderRadius:'10px'}} >

                        <div className="cardata col-3 ">
                            <h5>商品名稱</h5>
                        </div>
                        <div className="cardata col-2 " >
                        <a >日期</a>
                        </div>

                        <div className="cardata col-2" >
                        <a >時段</a>
                        </div>

                        <div className="cardata col-2">
                            <a>價錢</a>
                        </div>
                        <div className='cardata col-3' >
                            <a>移除商品</a>
                        </div>
                </div>
                <form action="http://localhost:80/spost/BenPHP/ECPay.php" method="post" enctype="application/x-www-form-urlencoded" name="cartData" >

                {this.state.carData.map((value,index,array)=>{
                    return(
                        <>
                        <div className='container border-bottom' >
                        <input class="" name="MerchantTradeNo" type="hidden" value={value.carid} />
                        <input class="form-control" name="MerchantTradeDate" type="hidden" value={"2009/07/12 12:34:56"} />
                        <input class="form-control" name="TotalAmount" type="hidden" value={this.state.sumPrice} />
                        <input class="form-control" name="TradeDesc" type="hidden" value={"Spost專屬商品"} />
                        <input class="form-control" name="ItemName[]" type="hidden" value={JSON.stringify(this.state.carData)} />
                        <input class="form-control" name="ItemPrice" type="hidden" value={value.price} />
                        <input class="form-control" name="ItemType" type="hidden" value={value.oid[0] =='l'? "(課程)":"(場地)"} />
                        <input class="form-control" name="MemberID" type="hidden" value={value.id} />

                        <div className='row carTitleHover'  style={{justifyItems:'center',alignItems:'center'}} >
                            <div className="cardata col-3">
                                <h5>{value.title}{value.oid[0] =='l'? "(課程)":"(場地)"}</h5>
                            </div>
                            <div className="cardata col-2" >
                            <a  >{value.date}</a>
                            </div>
                            <div className="cardata col-2" >
                            <a >{value.time}</a>
                            </div>
                            <div className="cardata col-2">NT${value.price}</div>
                            <button className='col-3 btn' name="deleCar"  onClick={this.deleCar} type="button" data_car={value.carid} ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path className='deleButton' d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg></button>
                            </div>
                        </div>
                        </>
                    )
                })}
                    <div className='mt-3 d-md-flex justify-content-md-end text-danger' >
                        <h5>總金額:NT${this.state.sumPrice}</h5>
                    </div> 
                <div className=' d-md-flex justify-content-md-end row cols-2'>
 
                    <div className='col-12'>
                        <a>選擇付款方式:</a>
                        <select className='' id="ChoosePaymentSelect" onChange={(e)=>{
                            this.state.ChoosePayment = e.target.value
                            this.setState({});
                            console.log(this.state.ChoosePayment)
                        }}>
                  
                    <input name="ChoosePayment" type="hidden" value={this.state.ChoosePayment} />
                            <option name="" type="text" value="" selected="selected" >請選擇支付方式</option>
                            <option name="" type="text" value="Credit">信用卡付款</option>
                            <option name="" type="text" value="ATM">銀行轉帳</option>
                            <option name="" type="text" value="CVS">超商代碼</option>
                            
                        </select>
                    </div>
                </div>

                <div className='mt-3 d-md-flex justify-content-md-end'>
                    <div className='m-2 d-flex align-items-center'>
                    <a href="javascript:history.back()">選擇更多</a>
                    </div>
                    <button className='btn btn-outline-dark me-md-2'  type="submit">確認付款</button>
                    </div>
                    </form>
                </div>
            </>
        );
    }
}
 
export default ShoppingCart;