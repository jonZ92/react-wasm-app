//import { test_wasm } from "./wasm"
import ReactDOM from 'react-dom'
import React from 'react'
import "../index.css"
import axios from 'axios'
import * as wasm from "../wasm-app/pkg/wasm_app"


class App extends React.Component {

    state = {
        userName: "",
        userPassword: "",
    };

    test_wasm = () => {
        let send = wasm.send_example_to_js();

        console.log(send);

        console.log("-----");

        let field = new Map();
        field.set(0, "my name is jon");
        let read = {
            field1: field,
            field2: [[], []],
            field3: [21, 31, 3, 1232],
        };

        let receive = wasm.receive_example_from_js(read);
        console.log(receive);
    }





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
        const username = this.state.userName;
        const password = this.state.userPassword;
        this.test_wasm();    
        axios.get("/app/wm/get/users").then(function (e) {



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


