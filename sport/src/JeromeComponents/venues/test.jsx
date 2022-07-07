import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import Head from './components/head';
import Scroll from './components/scroll';

function Venues(props) {
    const [state, setState] = useState('')
    const [news, setNews] = useState(undefined)

    // useEffect( () => {
    //     let test = Math.floor(Math.random() * 40)
    //     setState(props.match.params.pid)
    // }, [])

    


    // useEffect( () => {
    //     const Qs = require("qs")
    //     async function post() {
    //         await axios.post("http://localhost:80/spost/JerpmePHP/course.php", Qs.stringify({ pid: state }))
    //         .then( response => {
    //             setNews(response.data)
    //         })
    //     }
    //     post()
    // }, [state])


    return (
        <div style={{marginTop: '9vh'}}>
            <Head />
            <Scroll />
        </div>
    )
}

export default Venues;