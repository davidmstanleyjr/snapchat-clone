import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "../features/cameraSlice";
import { useHistory } from "react-router-dom";
import "../css/WebcamCapture.css";

// this sets the size of the camera
const videoConstraints = {
	width: 250,
	height: 400,
	facingMode: "user",
};

function WebcamCapture() {
	//the webcamref is a pointer that points to certain webcam logic
	const webcamRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();

	// run the function once and then save the output of the function, that way if it's used again, it knows what to do already.
	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		dispatch(setCameraImage(imageSrc));
		//uses the webpage history and redirects the user to the appropriate page
		history.push("/preview");
	}, [webcamRef]);

	return (
		<div className="webcamCapture">
			<Webcam
				audio={false}
				height={videoConstraints.height}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				width={videoConstraints.width}
				videoConstraints={videoConstraints}
			/>

			<RadioButtonUncheckedIcon
				className="webcamCapture__button"
				onClick={capture}
				fontSize="large"
			/>
		</div>
	);
}

export default WebcamCapture;
