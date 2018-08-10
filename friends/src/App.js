import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./Components/FriendList";
import FriendsForm from "./Components/FriendsForm";
import { NavLink, Route } from "react-router-dom";

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

	addFriend = data => {
		axios
			.post(`${url}`, data)
			.then(response => this.setState({ friendsArray: response.data }));
	};

	updateFriend = (id, data) => {
		axios
			.put(`${url}/${id}`, data)
			.then(response => this.setState({ friendsArray: response.data }));
	};

	deleteFriend = id => {
		axios
			.delete(`${url}/${id}`)
			.then(response => this.setState({ friendsArray: response.data }));
	};

	render() {
		return (
			<div className="App">
				<NavLink to="/friends">Friends</NavLink>
				<NavLink to="/add">Add Friend</NavLink>
				<Route
					exact
					path="/friends"
					render={() => (
						<FriendList
							onDelete={this.deleteFriend}
							onUpdate={this.updateFriend}
							friends={this.state.friendsArray}
						/>
					)}
				/>
				<Route
					exact
					path="/add"
					render={props => (
						<FriendsForm
							title={"Add New Friend, Friendo!"}
							{...props}
							onSubmit={this.addFriend}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
