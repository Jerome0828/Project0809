import { Component } from "react";
import Axios from 'axios';
import { toHtml } from "@fortawesome/fontawesome-svg-core";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom";
// npm i react-animated-css
// npm install aos
class LessonCard extends Component {
    state = {
        test1:this.props.dataList
    };
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 1000
        });
      }

    checkId(){
        console.log(this.props.match.params.data)

    }
    render() {
        // this.getData();
        let dataList = this.props.dataList;
        console.log(dataList);
        // console.log(this.state.test1)
        

        // <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        //     <div>
        //         hello world ;)
        //     </div>
        // </Animated>
        return (
            <>

           
                {
                    dataList.map(elm => {
                        return (
                            <div 
                            data-aos="zoom-in" className="border-0 col-xl-3 col-lg-5 col-md-5 card m-3">
                                    <div className="border rounded shadow card h-100">

                                        <div className="h-100">
                                        <Link onClick={this.checkId}to={`/shoppingCart/${elm.lid}`} >
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
                                            <Link to={`/shoppingCart/${elm.lid}`} >
                                                <p className="card-title text-nowrap text-truncate">{elm.title}</p>
                                            </Link>
                                            </div>
                                            <div className="col-12">
                                                <p className="card-text text-nowrap text-truncate">{elm.cname}</p>

                                            </div>
                                            <p className="card-text text-nowrap text-truncate"><small className="text-muted">{elm.addr}</small></p>
                                            <div className="col-12">
                                                <p><span className="p-1 rounded border border-dark fw-bold">{elm.type}</span></p>
                                            </div>
                                            <div className="col-12">
                                                <p><span className="p-1 rounded border border-dark fw-bold">{elm.mode}</span></p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between bg-white card-footer ">
                                            <span>評價</span>
                                            <span>${elm.price}</span>
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

export default LessonCard;