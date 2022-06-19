import React, { Component } from 'react';
import City from './city.json';

class Citys extends Component {
    state = { city: 'Taipei City'}
    componentDidMount() {
        City.map((cit) => {
            document.getElementById('city').innerHTML += `<option value=${cit.CityEngName}>${cit.CityName}</option>`
            if ( cit.CityEngName == this.state.city ) {
                cit.AreaList.map( (town) => {
                    document.getElementById('district').innerHTML += `<option>${town.AreaName}</option>`;
                })
            }
        })
    }

    check = () => {
        document.getElementById('district').innerHTML = ` `;
        let val = document.getElementById('city').value;
        City.map( (cit) => {
            if ( val == cit.CityEngName) {
                cit.AreaList.map( (town) => {
                    document.getElementById('district').innerHTML += `<option>${town.AreaName}</option>`;
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