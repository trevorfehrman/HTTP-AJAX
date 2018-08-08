import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";

let url = "http://localhost:5000/friends"


class App extends Component {
  state={
    friendsArray : [],
    loading: true,

  }

  componentDidMount(){
    axios.get(url).then(response => {
      console.log(response);
      console.log(axios);
      this.setState({
        friendsArray: response.data,        // friendsArray: response.data,
        loading: false
      })
    })
  }

  

  render() {
    return (
      <div className="App">
      {this.state.friendsArray.map(e => <div><h2>{e.name}</h2><div>{ e.age }</div>
        <div>{ e.email }</div></div>)}  
      </div>
    );
  }
}

export default App;
