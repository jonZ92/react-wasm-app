import React from "react"
import ReactDOM, { render } from "react-dom"

export function assembly() {

    //const Hello=()=>(<dev>这是我的第一个组件</dev>);
    // class Hello extends React.Component {
    //     render() {
    //         return (<dev>这是我的第一个类组件</dev>);
    //     }
    // }

    // ReactDOM.render(<Hello />, document.getElementById("assembly"));


    // class App extends React.Component {

    //     state = {
    //         txt: "",
    //         content: "",
    //         city: "",
    //         isChecked: false,
    //     }
    //     handleForm = (e) => {
    //         const target = e.target;
    //         const value = target.type == "checkbox" ? target.checked : target.value;
    //         const name = target.name;
    //         this.setState({
    //             [name]: value,
    //         });
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <br />
    //                 <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm} />
    //                 <br />
    //                 <textarea name="content" value={this.state.content} onChange={this.handleForm} />
    //                 <br />
    //                 <select name="city" value={this.state.city} onChange={this.handleForm}>
    //                     <option value="sh">上海</option>
    //                     <option value="bj">北京</option>
    //                     <option value="gz">广州</option>
    //                 </select>
    //                 <br />
    //                 <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleForm} />
    //             </div>
    //         );
    //     }
    // }
    // ReactDOM.render(<App />, document.getElementById("dynAssembly"));

}