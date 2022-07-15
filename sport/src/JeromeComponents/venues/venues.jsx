import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import Head from './components/head';
import Scroll from './components/scroll';
import Body from './components/body';
import Footer from '../footer';

function Venues(props) {
    const [state, setState] = useState('')
    const [news, setNews] = useState(undefined)

    useEffect( () => {
        setState(props.match.params.lid)
    }, [props])

    useEffect( () => {
        const Qs = require("qs")
        async function post() {
            await axios.post("http://localhost:80/spost/JeromePHP/venues.php", Qs.stringify({ lid: state }))
            .then( response => {
                setNews(response.data)
            })
        }
        post()
    }, [state])


    return (
        <div style={{marginTop: '9vh'}}>
            <Head all={news && news}/>
            <Scroll />
            <Body all={news && news}/>
            <Footer />
        </div>
    )
}

export default Venues;