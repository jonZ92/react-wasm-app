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


    usernameput = (event) => {
        this.setState({
            userName: event.target.value,
        })
    };
    passwordput = (event) => {
        this.setState({

            userPassword: event.target.value,
        })
    };
    getUser = () => {
        test_wasm();
        const username = this.state.userName;
        const password = this.state.userPassword;
        const params = { userName: username, userPassword: password };
        // this.test_wasm();    
        axios.post("/app/login", params).then(function (e) {
            console.log(e);

        });

    };

    render() {
        return (<div className="login">
            <div className="name"><input type="text" id="name-password" value={this.state.username} onChange={this.usernameput} /></div>
            <div className="password"><input type="text" id="name-password" value={this.state.password} onChange={this.passwordput} /></div>
            <div><button className='log-button' onClick={() => this.getUser()}>点击登陆</button></div>
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById("root"));


