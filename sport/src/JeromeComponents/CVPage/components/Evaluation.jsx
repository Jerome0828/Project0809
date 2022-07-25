import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Evaluation(props) {


    useEffect( () => {
        if ( props.id[0] != undefined ) { post(props.id[0]) }
    }, [props])

    let post = async(id) => {
        const Qs = require("qs")
        await axios.post("http://localhost:80/spost/JeromePHP/Evaluation.php", Qs.stringify({ id: id }))
        .then( response => {
            console.log(response.data)
        })
    }


    return (
        <div className="card m-3" style={{border: '2px black solid' }} data-aos="fade-left">
            <div className='row card-body'>
                <img src="https://dummyimage.com/1000/000/fff" className='col-5 mt-3 mx-3 rounded-circle h-100'/>
                <div className='col-5 text-center align-self-center'>
                    <p className='mt-3'>name</p>
                    <span>time</span>
                </div>
            </div>
            <div className="card-body border-top-0">
                <p className='mt-3 vw-75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                我會想再繼續租借我會想再繼續租借我會想再繼我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借
                </p>
            </div>
        </div>
    );
}

export default Evaluation;