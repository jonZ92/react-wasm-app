import React from "react"
import ReactDOM, { render } from "react-dom"

export function assembly_props() {


    // const App = (props) => {
    //     console.log(props);
    //     return (
    //         <div >he</div>

    //     )
    // }
    class App extends React.Component {
        constructor(props) {
            super(props);
            console.log(props);
        }
        render() {
            this.props.fn();
            return (<div >he</div>);

        }
    }
    ReactDOM.render(<App name="jack" age="10" fn={()=>console.log("h11")} />, document.getElementById("assemblyProps"));


}