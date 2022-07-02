import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
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
                        }} src={this.props.src} className="card-img-top" />
                        {/* <img src="Project0809\sport\src\img\ben1.jpg" alt="" /> */}
                        <div className="card-body">
                            <h5 className="card-title">課程名稱:{this.props.title}</h5>
                            <p className="card-text">教練名稱:{this.props.host}</p>
                            <p className="card-text"><small className="text-muted">地點:{this.props.address}</small></p>
                        </div>
                    </div>
                    <div class="bg-white card-footer border border-top-0"><span>評價</span><span className="m-5">$價錢:{this.props.money}</span>
                    <button type="button"><Link to={`/becomeCoach`}>立即選購</Link></button>
                    <button type="button" onClick={this.props.onClick}><Link to={`/shoppingCart/`}>加入購物車</Link></button>
                    {/* <button type="button"><Link to={`/becomeCoach/${this.props.id}`}>立即選購</Link></button> */}
                    {/* <button type="button"><Link to={`/shoppingCart/${this.props.id}`}>加入購物車</Link></button> */}
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;