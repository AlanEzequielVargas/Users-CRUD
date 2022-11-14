import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Icons } from "./Icons";

const UsersList = ({ usersList, selectUser, deleteUser }) => {
	return (
		<ul className="users-container">
			<h1>Registered Users</h1>
			{usersList.map((user) => (
				<li key={user.id}>
					<div className="card-data">
						<h2>
							{user.first_name} {user.last_name}
						</h2>
						<div className="email">{user.email}</div>
						<div>
							<Icons icon={faBirthdayCake} />
							{user.birthday}
						</div>
					</div>

					<div className="card-btns">
						<button
							onClick={() => selectUser(user)}
							className="edit-btn"
						>
							<Icons
								icon={faPenToSquare}
								css="edit-icon"
							/>
						</button>
						<button
							onClick={() => deleteUser(user.id)}
							className="delete-btn"
						>
							<Icons icon={faTrashAlt} css="delete-icon" />
						</button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default UsersList;
