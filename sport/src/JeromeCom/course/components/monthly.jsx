import React, { Component } from 'react';
import Calendar from 'react-calendar';  // npm remove react-calendar
import 'react-calendar/dist/Calendar.css';


class Monthly extends Component {
    state = { value: new Date() , z: 'Jun-29-2022' }

    onChange = (e) => {
        this.state.value = e ;
        this.setState({})

        
        let month = e.getMonth() + 2 ;
        let day = e.getDate();
        let tod = e.getFullYear() +'-'+ month +'-'+ e.getDate();
        var a = new Date((new Date()).valueOf() + 1000*3600*24);
        this.state.z = a
        console.log({})  
        // this.setState({})
    }



    render() { 
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6' >
                        <Calendar onChange={this.onChange} value={this.state.value} minDate={new Date()} 
                            />
                    </div>
                    <div className='col-lg-6'>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Monthly;