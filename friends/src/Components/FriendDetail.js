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
		const { friend, onUpdate, onDelete} = this.props;
		const decoratedOnSubmit = data => {
			onUpdate(data);
			this.setState({
				showForm: false
			});
		};
		return (
			<div>
				<div>
					<h2>{friend.name}</h2>
					<div>{friend.age}</div>
					<div>{friend.email}</div>
				</div>
				<button onClick={this.toggleForm}>Update Button</button>
				<button onClick={ onDelete }>Murder Friend </button>
				{this.state.showForm ? (
					<FriendsForm onSubmit={ decoratedOnSubmit } title={"Update Info"} />
				) : null}
			</div>
		);
	}
}

export default FriendDetail;
