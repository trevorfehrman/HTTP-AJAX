import React from "react";
import FriendDetail from "./FriendDetail";

function FriendList({ friends, onUpdate }) {
	return (
		<div>
			{friends.map(e => (
				<FriendDetail
					onUpdate={onUpdate.bind(null, e.id)}
					key={e.id}
					friend={e}
				/>
			))}
		</div>
	);
}

export default FriendList;
