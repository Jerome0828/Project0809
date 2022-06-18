import React, { Component } from 'react';
import City from './city.json';

class Citys extends Component {
    state = { city: 'Taipei City'}
    componentDidMount() {
        City.map((val) => {
            document.getElementById('city').innerHTML += `<option value=${val.CityName}>${val.CityName}</option>`
            if ( val.CityEngName == this.state.city ) {
                val.AreaList.map( (b) => {
                    document.getElementById('district').innerHTML += `<option>${b.AreaName}</option>`;
                })
            }
        })
    }

    check = () => {
        document.getElementById('district').innerHTML = ` `;
        let val = document.getElementById('city').value;
        City.map( (a) => {
            if ( val == a.CityName ) {
                a.AreaList.map( (b) => {
                    document.getElementById('district').innerHTML += `<option>${b.AreaName}</option>`;
                })
            }
        })
    }

    render() {
        return (
            <div>
                <select id="city" onChange={this.check}></select>
                <select id="district"></select>
            </div>

        )

    }

}

export default Citys;