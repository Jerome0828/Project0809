import React, { Component } from 'react';
import citycountrydata from '../data/citycountrydata.json'
class jsonDemo extends Component {
    state = {}
    data = () => {
        fetch(citycountrydata)
            .then(req => console.log(req))
            .then(data => console.log(data))
    }
    render() {
        return (
            <>
                {this.data()};
            </>
        );
    }
}

export default jsonDemo;