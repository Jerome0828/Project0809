import { Component } from "react";
// import pic from '../imgs/user.png';
// import brad from '../imgs/Brad.png';
class Card extends Component {
    state = {
        // src: [pic, brad, pic]
    };
    render() {
        return (
            <div className="col-3 card m-3 border-0">
                <div style={{width:'100%'}}>
                    <div class="card">
                        <img style={{
                            maxWidth:'219px',
                            maxHeight:'219px',
                            background: 'white',
                            objectFit: 'cover',
                            objectPosition:'50% 50%'
                        // }} src={this.state.src[1]} className="card-img-top" />
                        }} src="https://dummyimage.com/600x400/000/fff" className="card-img-top" />
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