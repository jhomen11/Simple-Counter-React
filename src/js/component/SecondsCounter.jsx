import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({
	tSegundo1,
	tSegundo2,
	tSegundo3,
	tSegundo4,
	tSegundo5,
	inicio
}) => {
	const detenerTiempo = () => {
		clearInterval(inicio);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="main">
						<div className="digito">
							<span>
								<i className="far fa-clock"></i>
							</span>
						</div>
						<div className="cinco digito">{tSegundo5}</div>
						<div className="cuatro digito">{tSegundo4}</div>
						<div className="tres digito">{tSegundo3}</div>
						<div className="dos digito">{tSegundo2}</div>
						<div className="uno digito">{tSegundo1}</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<button className="btn btn-dark" onClick={detenerTiempo}>
					Detener Tiempo
				</button>
			</div>
		</>
	);
};
SecondsCounter.propTypes = {
	tSegundo1: PropTypes.number,
	tSegundo2: PropTypes.number,
	tSegundo3: PropTypes.number,
	tSegundo4: PropTypes.number,
	tSegundo5: PropTypes.number,
	inicio: PropTypes.any
};

export default SecondsCounter;
