import React, { Component } from 'react';
import citycountrydata from '../data/citycountrydata.json'
class Citys extends Component {
    state = {}

    district = (city) => {
        var cityDistrict = citycountrydata.map((val)=>(val));
        switch(city){
            case 'Taipei City' : var districtList = cityDistrict[0].AreaList;break;
            case 'Keelung City' : var districtList = cityDistrict[1].AreaList;break;
            case 'New Taipei City' : var districtList = cityDistrict[2].AreaList;break;
            case 'Lienchiang County' : var districtList = cityDistrict[3].AreaList;break;
            case 'Yilan County' : var districtList = cityDistrict[4].AreaList;break;
            case 'Hsinchu City' : var districtList = cityDistrict[6].AreaList;break;
            case 'Hsinchu County' : var districtList = cityDistrict[7].AreaList;break;
            case 'Taoyuan City' : var districtList = cityDistrict[8].AreaList;break;
            case 'Miaoli County' : var districtList = cityDistrict[9].AreaList;break;
            case 'Taichung City' : var districtList = cityDistrict[10].AreaList;break;
            case 'Changhua County' : var districtList = cityDistrict[11].AreaList;break;
            case 'Nantou County' : var districtList = cityDistrict[12].AreaList;break;
            case 'Chiayi City' : var districtList = cityDistrict[13].AreaList;break;
            case 'Chiayi County' : var districtList = cityDistrict[14].AreaList;break;
            case 'Yunlin County' : var districtList = cityDistrict[15].AreaList;break;
            case 'Tainan City' : var districtList = cityDistrict[16].AreaList;break;
            case 'Kaohsiung City' : var districtList = cityDistrict[17].AreaList;break;
            case 'Penghu County' : var districtList = cityDistrict[19].AreaList;break;
            case 'Kinmen County' : var districtList = cityDistrict[20].AreaList;break;
            case 'Pingtung County' : var districtList = cityDistrict[21].AreaList;break;
            case 'Taitung County' : var districtList = cityDistrict[22].AreaList;break;
            case 'Hualien County' : var districtList = cityDistrict[23].AreaList;break;
        }
        let district = document.getElementById('district');
        districtList.map((val,idx) => {
            // console.log(val, idx)
            district.innerHTML += `<option key=${idx} value=${val.AreaEngName}>${val.AreaName}</option>`
        });
        // console.log(cityDistrict);
        this.setState({});
    }
    check = (e) => {
        let district = document.getElementById('district');
        if(district.innerHTML){
            district.innerHTML = '';
        }
        this.district(e.target.value);
        // console.log(e.target.value);
        this.setState({});
    }
    render() {
        let selectedOptionId = '';
        

        return (
            <>
                <select className='form-control' id="city" defaultValue={selectedOptionId} onChange={this.check} required>
                    <option value="">縣市</option>
                    {citycountrydata.map((val,idx)=>
                        <option key={idx} value={val.CityEngName}>{val.CityName}</option>
                        )}
                </select >
                <select className='mt-2 form-control' id="district" required></select>
            </>

        )

    }

}

export default Citys;