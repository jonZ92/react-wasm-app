import React from "react"
import ReactDOM from "react-dom"

export function reactjsx() {

    const name = "json";

    const sayfunc = () => "sayfunc";

    const loading = true;
    const loadData = () => {
        return loading ? (<dev>loading...</dev>) : (<dev>数据加载完毕...</dev>);
    };
    // const titl = (
    //     <h1 className="titl">
    //         Hello
    //         <p>
    //             {name}
    //         </p>
    //         <p>
    //             {sayfunc()}
    //         </p>
    //     </h1>
    // );
    // const titl = (
    //     <h1>
    //         {loadData()}
    //     </h1>

    // );

    // const songs = [
    //     { id: 1, name: "jon" },
    //     { id: 2, name: "sn" },
    //     { id: 3, name: "child" }
    // ];

    // const titl = (
    //     <ul>
    //         {songs.map(item => <li key={item.id}>{item.name}</li>)}
    //     </ul>
    // );


    // const titl=(
    //     <h1 style={{color:"red",backgroundColor:"skyblue"}}>
    //            JSX的样式处理 
    //     </h1>
    // );

    // const titl=(
    //     <h1 className="title" style={{color:"red",backgroundColor:"skyblue"}}>
    //         JSX的样式处理 
    //     </h1>
    // );
    // ReactDOM.render(titl, document.getElementById("root"));;
}