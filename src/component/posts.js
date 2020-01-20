import React, { Component } from 'react'
import axios from 'axios'



export default class posts extends Component {
    state ={
        posts:[],
        

    }
    componentDidMount = () => {
        this.getList();
      };
      getList = () => {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.user.id }`)
          .then(res => this.setState({ posts: res.data }));
      };
    
    render() {
      
        return (
            <div>
               {this.state.posts.map(e => (
                   <div>
                   <h2> {e.title}</h2>
                   <p>{e.body}</p>
                   </div>
               ))} 
            </div>
        )
    }
}
