import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import FriendList from "./Components/FriendList";
import FriendsForm from "./Components/FriendsForm";

let url = "http://localhost:5000/friends";

class App extends Component {
	state = {
		friendsArray: [],
		loading: true
	};

	componentDidMount() {
		axios.get(url).then(response => {
			console.log(response);
			console.log(axios);
			this.setState({
				friendsArray: response.data, // friendsArray: response.data,
				loading: false
			});
		});
	}

	render() {
		return (
			<div className="App">
				<FriendList friends={this.state.friendsArray} />
        <FriendsForm />
        
			</div>
		);
	}
}

export default App;