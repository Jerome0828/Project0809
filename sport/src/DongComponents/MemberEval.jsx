import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
import axios from 'axios';

class MemberPlan extends Component {
    state = {
        // 會員帳號Id, 會員帳號
        accountId: '', account: '',
    }

    // 取得會員Id
    componentDidMount = () => {
        this.state.accountId = this.props.match.params.id;
        this.MemberOrderList(this.props.match.params.id)
        this.setState({})
    }

    MemberOrderList = async(memberId) => {
        const Qs = require("qs");
        await axios.post("http://localhost:80/spost/JeromePHP/memberOrderList.php", Qs.stringify({ 
            id: memberId,
            info: window.localStorage.info
        }))
        .then( response => {
            console.log(response.data)
        })
    }



    render() {
        return (
            <div className='container'>                
                <div className='row'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'></div>
                    <div className='col-9 mt-5 shadow border'>
                        <p>test</p>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default MemberPlan;