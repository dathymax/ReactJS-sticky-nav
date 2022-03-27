import React from "react";
import logoImg from "../../../images/logo.png";

const Logo = () => {
	return (
		<div>
			<a href="/">
				<img src={logoImg} alt="" className="nav__logo" />
			</a>
		</div>
	);
};

export default Logo;
