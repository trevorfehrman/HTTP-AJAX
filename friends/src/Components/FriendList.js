import React from "react";

function FriendList(props) {
	return (
		<div>
			{props.friends.map(e => (
				<div>
					<h2>{e.name}</h2>
					<div>{e.age}</div>
					<div>{e.email}</div>
				</div>
			))}
		</div>
	);
}

export default FriendList;
