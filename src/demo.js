import React from "react"
import ReactDOM, { render } from "react-dom"

export function demo_function() {

    // class App extends React.Component {
    //     state = {
    //         comments: [
    //         ],
    //         userName: "",
    //         userContent: "",

    //     }

    //     handleChange = (e) => {
    //         const { name, value } = e.target;
    //         this.setState({
    //             [name]: value
    //         });
    //     }

    //     handleClick = () => {
    //         const { comments, userName, userContent } = this.state;
    //         if (userName.trim() == '' || userContent.trim() == '') {
    //             alert("请入评论信息");
    //             return;
    //         }
    //         const newContent = [{ id: Math.random(), name: userName, content: userContent }, ...comments]
    //         this.setState({
    //             comments: newContent,
    //             userName: "",
    //             userContent: "",
    //         });

    //     }

    //     renderList() {
    //         if (this.state.comments.length == 0) {
    //             return (<div className="on-comment">
    //                 暂无评论，快去评论把
    //             </div>);
    //         }
    //         return (
    //             <ul>
    //                 {this.state.comments.map(item => (
    //                     <li key={item.id}>
    //                         <h3>评论人：{item.name}</h3>
    //                         <p>评论内容：{item.content}</p>
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     }

    //     render() {
    //         const { userName, userContent } = this.state;

    //         return (
    //             <div className="app">
    //                 <div>
    //                     <input className="user" type="text" placeholder="请输入评论人" name="userName" value={userName} onChange={this.handleChange} />
    //                     <br />
    //                     <textarea className="content" cols="30" rows="10" placeholder="请输入评论内容" name="userContent" value={userContent} onChange={this.handleChange} />
    //                     <br />
    //                     <button onClick={this.handleClick}>发表评论</button>
    //                 </div>
    //                 {this.renderList()}
    //             </div>
    //         );
    //     }
    // }

    // ReactDOM.render(<App />, document.getElementById("demo"));
}