import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/appSlice";
import { auth, provider } from "../firebase";
import "../css/Login.css";

function Login() {
	const dispatch = useDispatch();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch(
					login({
						username: result.user.displayName,
						profilePic: result.user.photoURL,
						id: result.user.uid,
					})
				);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://res.cloudinary.com/ddet8to42/image/upload/v1630621391/snapchat-clone/1-snapchat_jke8yr.jpg"
					alt=""
				/>
				<Button variant="outlined" onClick={signIn}>
					Sign in
				</Button>
			</div>
		</div>
	);
}

export default Login;
