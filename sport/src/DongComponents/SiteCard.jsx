import { Component } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom";
// npm i react-animated-css
// npm install aos
class SiteCard extends Component {
    state = {
    };
    componentDidMount() {
        AOS.init({
          duration : 1000
        });
      }
      /*
        addr: "桃園市中壢區中豐路160號"
        img1: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAcHBwcIBwgJCQgMD
        pid: "1"
        price: "200"
        pricepertime: "60 分鐘"
        title: "健身房包場租借"
        type: "拳擊格鬥;混合健身;有氧訓練;重量訓練"*/
    render() {
        let dataList = this.props.dataList;
        console.log(dataList);

        return (
            <>
                {
                    dataList.map(elm => {
                        return (
                            <div data-aos="zoom-in" className="border-0 col-xl-3 col-lg-5 col-md-5 card m-3">
                                    <div className="border rounded shadow card h-100">
                                        <div className="h-100">
                                        <Link to={`/shoppingCart/${elm.pid}`} >
                                            <img style={{
                                                height: '18em',
                                                width: '100%',
                                                background: 'white',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%'
                                            }} src={`data:image/jpeg;base64,${elm.img1}`} className="card-img-top" />
                                        </Link>
                                        </div>
                                        <div className="card-body row ">
                                            <div className="col-12">
                                            <Link to={`/shoppingCart/${elm.pid}`} >
                                                <p className="card-title text-nowrap text-truncate">{elm.title}</p>
                                            </Link>
                                            </div>

                                            <p className="card-text text-nowrap text-truncate"><small className="text-muted">{elm.addr}</small></p>
                                            {/* <div className="col-12">
                                                <p><span className="p-1 rounded border border-dark fw-bold">{elm.type}</span></p>
                                            </div>
                                            <div className="col-12">
                                                <p><span className="p-1 rounded border border-dark fw-bold">{elm.mode}</span></p>
                                            </div> */}
                                        </div>
                                        <div className="d-flex bg-white card-footer ">
                                            <span>$&nbsp;{elm.price}</span><span>&nbsp;/&nbsp;</span><span>{elm.pricepertime}</span>
                                        </div>
                                    </div>
                            </div>
                        );
                    })
                }
            </>
        )
    }

}

export default SiteCard;