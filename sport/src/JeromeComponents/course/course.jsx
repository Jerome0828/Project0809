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

function Courses(props) {
    const [state, setState] = useState('')
    const [news, setNews] = useState(undefined)

    useEffect( () => {
        setState(props.match.params.pid)
    }, [])

    useEffect( () => {
        const Qs = require("qs")
        async function post() {
            await axios.post("http://localhost:80/spost/JeromePHP/course.php", Qs.stringify({ pid: state }))
            .then( response => {
                setNews(response.data)
            })
        }
        post()
    }, [state])


    return (
        <div style={{marginTop: '9vh'}} >
            <div id='course'>
                <Head all={news && news}/>
                <Scroll />
            </div>
            <div id='course2'>
                <Body all={news && news}/>
                <Footer />
            </div>
        </div>
    )
}

export default Courses;