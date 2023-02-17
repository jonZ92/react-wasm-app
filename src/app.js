import { test_wasm } from "./wasm"
import ReactDOM from 'react-dom'
import React from 'react'
import "../index.css"

test_wasm();
class App extends React.Component {
    state = {}
    render() {
        return (<div className="login">
            <div className="name"><input type="text" id="name-password" /></div>
            <div className="password"><input type="text" id="name-password" /></div>
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
