import { Component } from "react";
import pic from './icon/jpg/bg/1.jpg'


class Card extends Component {
    state = {
        src: [pic]
    };
    render() {
        return (
            <div className="col-lg-3 card m-3 border-0" data-aos="zoom-in-up">
                <div style={{width:'100%'}}>
                    <div class="card">
                        <img  className="card-img-top" src={this.state.src[0]}
                            style={{
                                Width:'100%',
                                maxHeight:'219px',
                                background: 'white',
                                objectFit: 'cover',
                                objectPosition:'50% 50%'
                            }} />
                        <div className="card-body">
                            <h5 className="card-title">課程名稱</h5>
                            <p className="card-text">教練名稱</p>
                            <p className="card-text"><small className="text-muted">地點</small></p>
                        </div>
                    </div>
                    <div class="bg-white card-footer border border-top-0"><span>評價</span><span className="m-5">$價錢</span></div>
                </div>
            </div>
        )
    }
}

export default Card;