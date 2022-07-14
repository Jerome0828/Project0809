import React, { Component } from 'react';
import Axios from 'axios';
import MemberPage from '../DongComponents/MemberPage.jsx';
import MemberLessonPost from '../DongComponents/MemberLessonPost.jsx';
import MemberPlacePost from '../DongComponents/MemberPlacePost.jsx';
class MemberPost extends Component {
    state = {
        lesson:[],place:[]
    }
    async componentDidMount() {
        let resdata = [];
        let resPlaceData=[];
        await Axios.post("http://localhost/spost/DongPHP/memberLessonPost.php", this.props.match.params.id )
        .then( (response) => {
            resdata = response.data;
        });
        await Axios.post("http://localhost/spost/DongPHP/memberPlacePost.php", this.props.match.params.id )
        .then( (response) => {
            resPlaceData = response.data;
        });
        // console.log(resdata);
        this.state.lesson = resdata;
        this.state.place = resPlaceData;
        this.setState({});
    }
    render() {
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row mt-5'>
                    <div className='col-2 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'>
                    </div>
                    {/* 已上傳Card */}
                    <div className='col-9'>
                        <div className='row'>
                            <MemberLessonPost dataList={this.state.lesson}/>
                            <MemberPlacePost dataList={this.state.place}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberPost;