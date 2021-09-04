import React, { useEffect } from "react";
import "./css/App.css";
import WebcamCapture from "./components/WebcamCapture";
import Preview from "./components/Preview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import ChatView from "./components/ChatView";
import { login, logout, selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import { auth } from "./firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						username: authUser.displayName,
						profilePic: authUser.photoURL,
						id: authUser.uid,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<img
							className="app__logo"
							src="https://res.cloudinary.com/ddet8to42/image/upload/v1630620624/snapchat-clone/snapchat_c4vjqu.jpg"
							alt=""
						/>
						<div className="app__body">
							<div className="app__bodyBackground">
								<Switch>
									<Route path="/chats/view">
										<ChatView />
									</Route>
									<Route path="/chats">
										<Chats />
									</Route>
									<Route path="/preview">
										<Preview />
									</Route>
									<Route exact path="/">
										<WebcamCapture />
									</Route>
								</Switch>
							</div>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
