import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Head from './components/head';
import Scroll from './components/scroll';
import Body from './components/body';
import Footer from '../footer';

import axios from 'axios';

AOS.init();

function Courses () {
    const [state, setState] = useState('')
    const [news, setNews] = useState(undefined)

    useEffect( () => {
        let test = this.props.match.params.id;
        setState(test)
    }, [])


    useEffect( () => {
        const Qs = require("qs")
        async function post() {
            await axios.post("http://localhost:80/sport/course.php", Qs.stringify({ pid: state }))
            .then( response => {
                setNews(response.data)
            })
        }
        post()
    }, [state])


    return (
        <div>
            <Head all={news && news}/>
            <Scroll />
            <Body all={news && news}/>
            <Footer />
        </div>
    )
}

export default Courses;