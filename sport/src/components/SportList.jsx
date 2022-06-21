import React, { Component } from 'react';
class SportList extends Component {
    state = { }
    sportList = {
        'yoga':'瑜珈',
        'workout':'健身'
    }
    creatSportList=() => {
        document.getElementById('sportList').innerHTML += '<input type="text"/>'
    }
    render() { 
        return (
            <div id='sportList'>
                
            </div>
        );
    }
}
 
export default SportList;