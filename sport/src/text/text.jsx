import React, { Component } from 'react';
import City from './city.json';

class Text extends Component {
    state = {
        city: []
        
    } 
    
    aa = () => {
        City.map( (a) => {
            
            // console.log()
        })
    }

    render() { 
        return (
            <div>
                <table border='5px solid'>
                    <tr>
                        <td>aaa</td>
                    </tr>
                    <tr>
                        <td>aaa</td>
                    </tr>
                </table>
                {this.aa()}
                {console.log(this.state.city)}
            </div>
            
        );
    }
}
 
export default Text;