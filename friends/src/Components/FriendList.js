import React from "react";
import FriendDetail from "./FriendDetail";

function FriendList({ friends, onUpdate, onDelete }) {
	return (
		<div>
			{friends.map(e => (
				<FriendDetail
					onUpdate={onUpdate.bind(null, e.id)}
					key={e.id}
					friend={e}
					onDelete={onDelete.bind(null, e.id)}
				/>
			))}
		</div>
	);
}

export default FriendList;
