import React from "react";

function FriendsFrom(props) {
	return (
		<form>
			<div>
				<input type="text" placeholder="Name" name="name" />
			</div>
			<div>
				<input type="number" placeholder="Number" name="number" />
			</div>
			<div>
				<input type="email" placeholder="Email" name="number" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default FriendsFrom;
