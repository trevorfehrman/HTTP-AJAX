import React from "react";

class FriendsForm extends React.Component {
	state = {
		name: "",
		age: "",
		email: ""
	};

	handleChange = event =>
		this.setState({
			[event.target.name]: event.target.value
		});

	addFriend = data => {};
	render() {
		return (
			<form
            onSubmit={ e => {
                e.preventDefault();
                this.props.onAddFriend( this.state );
                this.props.history.push('/friends');
                this.setState({name: '', age: '', email: ''});
            }}>
				<h3>Make a new friend, friendo!</h3>
				<div>
					<input onChange={this.handleChange} type="text" placeholder="Name" name="name" value={this.state.name} />
				</div>
				<div>
					<input onChange={this.handleChange} type="number" placeholder="Age" name="age" value={this.state.age} />
				</div>
				<div>
					<input onChange={this.handleChange} type="email" placeholder="Email" name="email" value={this.state.email}/>
				</div>
				<button>Submit</button>
			</form>
		);
	}
}

export default FriendsForm;
