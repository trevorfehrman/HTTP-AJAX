import React from "react";
import FriendsForm from "./FriendsForm";

class FriendDetail extends React.Component {
	state = {
		showForm: false
	};

	toggleForm = () =>
		this.setState(({ showForm }) => ({
			showForm: !showForm
		}));
	render() {
		const { friend, onUpdate } = this.props;
		return (
			<div>
				<div>
					<h2>{friend.name}</h2>
					<div>{friend.age}</div>
					<div>{friend.email}</div>
				</div>
				<button onClick={this.toggleForm}>Update Button</button>
				{this.state.showForm ? (
					<FriendsForm onSubmit={onUpdate} title={"Update Info"} />
				) : null}
			</div>
		);
	}
}

export default FriendDetail;
