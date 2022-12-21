import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import "./App.css";
import { Icons } from "./components/Icons";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
	const [list, setList] = useState([]);

	const [selectedUser, setSelectedUser] = useState(null);

	const [modal, setModal] = useState(false);

	useEffect(() => {

		axios.get("https://users-crud.academlo.tech/users/").then((res) =>

		axios.get("http://users-crud.academlo.tech/users/").then((res) =>

			setList(res.data)
		));
	}, []);

	function getUsers() {

		axios.get("https://users-crud.academlo.tech/users/").then((res) =>

		axios.get("http://users-crud.academlo.tech/users/").then((res) =>

			setList(res.data)
		));
	}

	function selectUser(user) {
		setSelectedUser(user);
		showModal();
	}

	function deselectUser() {
		setSelectedUser(null);
	}

	function deleteUser(id) {
		swal({
			title: "Delete user?",
			text: "Are you sure you want to delete this user?",
			icon: "warning",
			buttons: ["No", "Yes"],
		}).then((res) => {
			if (res) {
				axios.delete(

					`https://users-crud.academlo.tech/users/${id}/`

					`http://users-crud.academlo.tech/users/${id}/`

				)
					.then(() => getUsers())
					.catch((error) => console.log(error.resonse.data));
				swal({
					title: "Deleted user",
					icon: "success",
					button: false,
					timer: "2000",
				});
			}
		});
	}

	function showModal() {
		setModal(!modal);
	}

	return (
		<div className="App">
			<UsersForm
				selectedUser={selectedUser}
				getUsers={getUsers}
				deselectUser={deselectUser}
				modal={modal}
				showModal={showModal}
			/>

			<UsersList
				usersList={list}
				selectUser={selectUser}
				deleteUser={deleteUser}
				showModal={showModal}
			/>

			<button className="add-user-btn" onClick={showModal}>
				<Icons icon={faUserPlus} css="add-user-icon" />
			</button>
		</div>
	);
}

export default App;
