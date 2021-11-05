//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let contador = 0;
const inicio = setInterval(() => {
	contador++;
	const cinco = Math.floor(contador / 1000);
	const cuatro = Math.floor(contador / 1000);
	const tres = Math.floor(contador / 100) % 10;
	const dos = Math.trunc(contador / 10) % 10;
	const uno = Math.trunc(contador % 10);
	//console.log(contador % 10);
	ReactDOM.render(
		<SecondsCounter
			tSegundo1={uno}
			tSegundo2={dos}
			tSegundo3={tres}
			tSegundo4={cuatro}
			tSegundo5={cinco}
			inicio={inicio}
		/>,
		document.querySelector("#app")
	);
}, 1000);
