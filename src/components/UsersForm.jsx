import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const UsersForm = ({
	selectedUser,
	getUsers,
	deselectUser,
	modal,
	showModal,
}) => {
	const { handleSubmit, register, reset } = useForm();

	const defaultValues = {
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		birthday: "",
	};

	useEffect(() => {
		if (selectedUser) {
			reset(selectedUser);
		}
	}, [selectedUser]);

	function submit(data) {
		if (selectedUser) {
			axios.put(
				`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`,
				data
			)
				.then(() => getUsers(), deselectUser())
				.catch((error) => console.log(error.response?.data));
			swal({
				title: "Edited user",
				icon: "success",
				button: false,
				timer: "2000",
			});
		} else {
			axios.post("https://users-crud1.herokuapp.com/users/", data)
				.then(() => getUsers())
				.catch((error) => console.log(error.response?.data));
			swal({
				title: "Created user",
				icon: "success",
				button: false,
				timer: "2000",
			});
		}
		reset(defaultValues);
		showModal();
	}

	return (
		<>
			{modal ? (
				<div className="modal">
					<div className="form-container">
						<button
							className="close-modal-btn"
							onClick={showModal}
						>
							close X
						</button>
						<h1 className="form-title">Register/Edit</h1>
						<form onSubmit={handleSubmit(submit)}>
							<div className="input-container">
								<label htmlFor="email">Email </label>
								<input
									{...register("email")}
									type="email"
									placeholder="your email"
									id="email"
								/>
							</div>
							<div className="input-container">
								<label htmlFor="password">
									Password{" "}
								</label>
								<input
									{...register("password")}
									type="password"
									placeholder="your password"
									id="password"
								/>
							</div>
							<div className="input-container">
								<label htmlFor="first_name">
									First name{" "}
								</label>
								<input
									{...register("first_name")}
									type="text"
									placeholder="your first name"
									id="first_name"
								/>
							</div>
							<div className="input-container">
								<label htmlFor="last_name">
									Last name{" "}
								</label>
								<input
									{...register("last_name")}
									type="text"
									placeholder="your last name"
									id="last_name"
								/>
							</div>
							<div className="input-container">
								<label htmlFor="birthday">
									Birthday{" "}
								</label>
								<input
									{...register("birthday")}
									type="date"
									min="1930-01-01"
									max="2004-01-01"
									placeholder="your date of birth"
									id="birthday"
								/>
							</div>

							<button className="submit-btn">
								submit
							</button>
						</form>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default UsersForm;
