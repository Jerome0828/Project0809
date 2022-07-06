import React, { Component } from 'react';
import Axios from 'axios'
class TodoCreate extends Component {
    state = { 
        todoItem:{ todoTableId: 3, title: "Job C", isComplete:"" }
    } 


    okClick = async ()=>{
    await Axios.post('http://localhost:8000/todo/create',this.state.todoItem);
        window.location = "/";
    }

    doChange =(e)=>{
        this.state.todoItem.title = e.target.value;
        this.setState({});
    }

    toChange=(e)=>{
        this.state.todoItem.isComplete = e.target.checked;
        this.setState({});
    }

    render() { 
        return (
            <div className="container">

                <h1>待辦事項清單 - 新增</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form action="/Todo/create" method="post">
                            
                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">項目名稱</label>
                                <input className="form-control" type="text" id="Name" 
                                name="Name" value={this.props.value}
                                onChange={this.doChange}

                                    />
                            
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" id="IsComplete" 
                                        name="IsComplete" value="" checked={this.props.checked}
                                        onChange={this.toChange}
                                        /> 是否已完工
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="submit"
                                onClick={this.okClick}
                                value="確定" className="btn btn-outline-primary" /> | 
                                <a href="/" className="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        );
    }
}
 
export default TodoCreate;