import React, { useState } from "react";
import Actions from "./items/actions/Actions";
import Elements from "./items/Elements";
import Logo from "./items/Logo";

const Navigation = () => {
	const [navBar, setNavBar] = useState(false);

	const changeBackgroundNav = () => {
		if (window.scrollY >= 300) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	window.addEventListener("scroll", changeBackgroundNav);

	return (
		<div className={navBar ? "nav__wrapper sticky" : "nav__wrapper"}>
			<div className="nav__inner">
				<Logo />
				<Elements />
				<Actions />
			</div>
		</div>
	);
};

export default Navigation;
