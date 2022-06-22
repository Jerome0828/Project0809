import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome


class SportList extends Component {
    state = {
        
    }
    sportListOnclick=(event)=>{
        let e = event
        this.props.sportListOnclick(e)
    }
    clearSportType=()=>{
        this.props.clearSportType()
    }

    render() {
        return (
            <div id='sportList'>    
            <div className='d-flex justify-content-between mt-3'><span>類別</span><span onClick={this.clearSportType} className='btn text-secondary'>清除</span></div>            
                {this.props.datas.map((elm) => {
                     return (
                        <React.Fragment>
                            <input onChange={this.sportListOnclick} className='d-none' type="checkbox" id={elm.value} name="sportType" />
                            <label htmlFor={elm.value} className='m-1'><span name={elm.value}><FontAwesomeIcon icon={elm.chkicon} />&nbsp;</span>{elm.cName}</label>
                        </React.Fragment>
                    )
                })}
            </div>
        );
    }
}

export default SportList;