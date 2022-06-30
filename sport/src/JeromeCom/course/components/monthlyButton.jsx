import React, { Component } from 'react';

class MonthlyButton extends Component {
    state = {  } 

    componentDidMount = () => {
        
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
            <table className='table'>
                <tbody>
                    <tr>
                        <td><button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}
                            disabled="" >btn</button></td>
                        <td><button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}
                            ref={this.aaa}>btn</button></td>
                        <td><button className="btn w-100" onClick={this.btnColor} checked={false} style={{backgroundColor: "red"}}
                            ref={this.aaa}>btn</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
 
export default MonthlyButton;