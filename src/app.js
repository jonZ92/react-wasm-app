import { test_wasm } from "./wasm"
import ReactDOM from 'react-dom'
import React from 'react'
import "../index.css"
import axios from 'axios'



class App extends React.Component {

    state = {
        userName: "",
        userPassword: "",
    };


    username_save = (event) => {
        this.setState({
            userName: event.target.value,
        })
    };
    password_save = (event) => {
        this.setState({

            userPassword: event.target.value,
        })
    };
    post_login = () => {
        test_wasm();
        const username = this.state.userName;
        const password = this.state.userPassword;
        const params = { userName: username, userPassword: password };
        // this.test_wasm();    
        axios.post("/app/login", params).then(function (e) {
            //console.log(e);

        });

    };

    render() {
        return (<div className="login">
            <div className="name"><input type="text" id="name-password" value={this.state.username} onChange={this.username_save} /></div>
            <div className="password"><input type="text" id="name-password" value={this.state.password} onChange={this.password_save} /></div>
            <div><button className='log-button' onClick={() => this.post_login()}>点击登陆</button></div>
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById("root"));


