//import { test_wasm } from "./wasm"
import ReactDOM from 'react-dom'
import React from 'react'
import "../index.css"
import axios from 'axios'


//test_wasm();
class App extends React.Component {
    state = {}

    // getUser = () => {
    //     axios.get("/app/wm/get/users").then(function (e) {
    //         console.log(e);
    //     });

    // }


    render() {
        return (<div className="login">
            <div className="name"><input type="text" id="name-password" /></div>
            <div className="password"><input type="text" id="name-password" /></div>
            
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
