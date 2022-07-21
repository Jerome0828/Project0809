import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/core/locales-all"
import "./calender.css"
// import "@fullcalendar/core/main.css"
// npm install --save @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/core

class MemberPlan extends Component {
    state = {}
    render() {
        return (
            <div className='container'>                
                <div className='row'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'></div>
                    <div className='col-9 mt-5 shadow '>
                        <p>test</p>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default MemberPlan;