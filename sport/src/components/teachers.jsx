import React, { Component } from 'react';

class Teachers extends Component {
    state = {  } 

    
    render() { 
        return (
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-2 mx-4'>
                        <div className='row justify-content-center mt-3'>
                            <img src="https://dummyimage.com/100/000/fff" 
                                className='col-lg-10 img-fluid rounded-circle' />
                        </div>
                        <h5 className='w-100 text-center my-4'>Name</h5>
                    </div>
                    <div className='col-lg-9'>
                        <div className='row mx-0'>
                            <table className='table table-striped col-lg-12'>
                                <tbody>
                                    <th className='text-center'><h4>證照</h4></th>
                                        <tr>
                                            <td>
                                                <div className='container'>
                                                    <table className='table'>
                                                        <tbody >
                                                            <tr>
                                                                <td>ACE CPT 美國運動委員會 私人教練專業證照認證</td>
                                                                <td>TRX STC 懸吊訓練師</td>
                                                            </tr>
                                                            <tr>
                                                                <td>AFAA PFT 美國運動體適能協會 個人體適能指導員</td>
                                                                <td>Cross core 懸吊訓練</td>
                                                            </tr>
                                                            <tr>
                                                                <td>VIPR 功能性訓練</td>
                                                                <td>運動體適能營養專家LV1+LV2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>SMART 自我筋膜放鬆</td>
                                                                <td>肌能系貼紮</td>
                                                            </tr>
                                                            <tr>
                                                                <td>身體感知訓練技巧</td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Teachers;