import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome


class InesrtSportList extends Component {
    state = {

    }

    sportListOnclick = (event) => {
        let e = event
        this.props.sportListOnclick(e)
    }
    clearSportType = () => {
        this.props.clearSportType()
    }
    render() {
        let inputBoxStyle = this.props.style;
        return (
            <div id='sportList'>
                {this.props.datas.map((elm) => {
                    return (
                        <React.Fragment>
                            <input onChange={this.sportListOnclick} className='d-none' type="checkbox" id={elm.value} name="sportType" required/>
                            <label htmlFor={elm.value} style={inputBoxStyle} className='rounded border border-secondary shadow p-1 mx-2'><span name={elm.value}><FontAwesomeIcon className={elm.color} icon={elm.chkicon} />&nbsp;</span>{elm.cName}</label>
                        </React.Fragment>
                    )
                })}

            </div>
        );
    }
}

export default InesrtSportList;