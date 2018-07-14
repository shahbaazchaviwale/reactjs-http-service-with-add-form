import React, { Component } from 'react'
import axios from "axios";
export default class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : ''
        };
    }

    GetTextBoxData = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    SubmitData = (event) =>{
            event.preventDefault();
            const post = {
                title : this.state.title,
                body : this.state.body
            }
            
        axios.post("https://jsonplaceholder.typicode.com/posts", {post})
          .then((response) => {
              console.log(response.data);
          })
          .catch();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.SubmitData} >
            <input type="text" name="title" value={this.state.title} onChange={this.GetTextBoxData} /> <br/>
                <textarea name="body" value={this.state.body} onChange={this.GetTextBoxData}  ></textarea> <br/>
            <input type="submit" value="POST"/>
            
        </form>
      </div>
    )
  }
}
