import React, { Component } from 'react';

class MonthlyButton extends Component {
    state = { mon: '08~22', b: [] } 

    componentDidMount = () => {
        let hr = this.state.mon.split('~');
        let firstHour = Number(hr[0]);
        let lastHour  = Number(hr[0]+1);
        for ( let i = 1 ; i <= Number(hr[1])-Number(hr[0]) ; i++ ) {
            if ( firstHour.toString().length == 1 && lastHour.toString().length == 1) {
                var a = `0${firstHour} ~ 0${firstHour+1}`
            }else if ( firstHour.toString().length == 1 && lastHour.toString() == 10 ){
                var a = `${firstHour} ~ 0${firstHour+1}`
            }else {
                var a = `${firstHour} ~ ${firstHour+1}`
            }
            this.state.b.push(a)
            if ( this.state.b.length == 4 ) {
              //  `<MonthlyButton times={${this.state.b}}/>`
              this.state.b = [];
              this.setState({})
            }
            firstHour++
            // console.log(parseInt(Number(hr[1])/4)  )
            // console.log(Number(hr[1])%4) 
        }
          
      }

    btnColor = (e) => {
        if ( e.target.style.backgroundColor == "green" ) {
            e.target.style.backgroundColor="red";
        }else {
            e.target.style.backgroundColor="green";
        }
    }


    render() { 
        return (
            <div id='div'className='row border' >
                <tr className='col-lg-12 '>
                    <div className='row justify-content-center'>
                        <td className='col-lg-3 border'>
                            <button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}>btn</button>
                        </td>
                        <td className='col-lg-3'>
                            <button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}
                            >btn</button>
                        </td>
                        <td className='col-lg-3'>
                            <button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}ref={this.aaa}>btn</button>
                        </td>
                        <td className='col-lg-3'>
                            <button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}ref={this.aaa}>btn</button>
                        </td>
                    </div>
                </tr>
            </div>
        );
    }
}
 
export default MonthlyButton;