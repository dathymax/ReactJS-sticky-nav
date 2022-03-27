import React, { useState } from "react";

const Language = () => {
	const [language, setLanguage] = useState("EN");

	return (
		<div className="language-choose">
			<div className="language-choosed cursor--pointer">{language}</div>
			<div className="language-dropdown">
				<ul className="language-items">
					<li className="language-item">EN</li>
					<li className="language-item">DE</li>
					<li className="language-item">ES</li>
				</ul>
			</div>
		</div>
	);
};

export default Language;
