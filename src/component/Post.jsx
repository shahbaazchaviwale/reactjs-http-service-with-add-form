import React, { Component } from 'react'
import axios from 'axios'
export default class Post extends Component {
constructor(props){
    super(props);
    this.state = { post : []};
}
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
           // console.log(response.data);
            this.setState({
                post : response.data
            });
        }).catch((error) =>{
                console.log('Error => ');
        });
    }
  render() {
      const post_list = this.state.post.map(PL => (
        <div key={PL.id}>
              <h3>{PL.id} => {PL.title}</h3>    
              <p>{PL.body}</p>
        </div>));
    return (
        
      <div>
            {post_list}
      </div>
    )
  }
}
