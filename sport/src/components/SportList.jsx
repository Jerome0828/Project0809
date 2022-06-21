import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome


class SportList extends Component {
    state = {
        // sportList: [{ id: 1, value: 'yoga', cName: '瑜珈', chkicon: faTimes }, { id: 2, value: 'workout', cName: '健身', chkicon: faTimes }]
    }
    sportListOnclick=(event)=>{
        let e = event
        this.props.sportListOnclick(e)
    }
    clearSportType=()=>{
        this.props.clearSportType()
    }
    
    // data=this.props.data;
    // data = '1231';
    
    // sportListOnclick = (e) => {
    //     this.state.sportList.map(elm => {
    //         // console.log(e.target.checked)
    //         if (e.target.id == elm.value) {
    //             // 若icon為 XX
    //             if (e.target.checked == true) {
    //                 document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>&nbsp;';
    //                 elm.chkicon = faCheck;
    //             }// 若icon為 vv
    //             else if (e.target.checked == false) {
    //                 document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>&nbsp;';
    //                 elm.chkicon = faTimes;
    //             }
    //             this.setState({});
    //         }
    //     })
    // }

    // clearSportType = () => {
    //     // var sportType = document.getElementsByName('sportType');
    //     // for (var i = 0; i < sportType.length; i++) {
    //     //     sportType[i].checked = false;
    //     // }
    //     this.state.sportList.map(elm => {
    //         elm.chkicon = faTimes;
    //     })
    //     this.setState({});
    // }

    render() {
        // let {data} = this.props.datas;
        return (
            <div id='sportList'>    
            <div className='d-flex justify-content-between mt-3'><span>類別</span><span onClick={this.clearSportType} className='btn text-secondary'>清除</span></div>            
                {this.props.datas.map((elm) => {
                    {/* {console.log(this.props.datas)} */}
                     return (
                        <React.Fragment>
                            <input onChange={this.sportListOnclick} className='d-none' type="checkbox" id={elm.value} name="sportType" />
                            <label htmlFor={elm.value} className='m-1'><span name={elm.value}><FontAwesomeIcon icon={elm.chkicon} />&nbsp;</span>{elm.cName}</label>
                        </React.Fragment>
                    )
                })}


                {/* <input className='border shadow'
                    onClick={this.sportListOnclick}
                    key={elm.id} value={elm.value} name='sportList' >
                    <span id={elm.value}><FontAwesomeIcon icon={elm.chooseOrNot} />&nbsp;</span>
                    {elm.cName}
                </input> */}
            </div>
        );
    }
}

export default SportList;