import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';



function Footer() {
    const [news, setNews] = useState(undefined);

    useEffect( () => {
        async function get() {
            await axios.get("http://localhost:80/sport/card.php")
            .then( response => {
                setNews(response.data)
            })
        }
        get()
    }, [])

    return (
        <div className='container mt-3'>
            <div className='row mx-4 '>
                <p id='title' className='container'>關聯課程</p>
                <div className='row justify-content-center'>
                    {news && Object.keys(news).map( (val,idx) => {
                        return (
                            <button className="col-lg-3 card m-3 border-0" data-aos="zoom-in-up" key={idx}>
                                <div style={{width:'100%'}}>
                                    <div class="card h-100">
                                        <div className=''>
                                            <img  className="card-img-top" src={`data:image/jpeg;base64,${news[val].img1}`}
                                            style={{
                                                width:'100%',
                                                height: '18em',
                                                // maxHeight:'50%',
                                                objectFit: 'cover',
                                                objectPosition:'50% 50%'
                                            }} />
                                        </div>
                                        <div className="card-body mt-3">
                                            <h5 className="card-title text-nowrap text-truncate">{news[val].title}</h5>
                                            <p className="card-text">教練名稱</p>
                                            <p className="card-text text-nowrap text-truncate">
                                                <small className="text-muted ">{news[val].addr}</small>
                                            </p>
                                        </div>
                                        <div className="bg-white card-footer border-top">
                                            <span className="d-flex justify-content-center">
                                                $ {news[val].price} / {news[val].pricepertime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
        
    );
}

export default Footer;