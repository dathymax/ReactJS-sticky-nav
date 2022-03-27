import React from "react";
import demos1 from "../../../../images/dropdown/demos-1.jpg";

const BlocksDropdown = () => {
	const items = [
		{
			img: <img src={demos1} alt="" className="dropdown-img" />,
			link: "/",
			title: "About",
		},
	];

	return (
		<div className="elements-dropdown">
			<div className="elements-dropdown__inner">
				{items.map((item, index) => (
					<div key={index}>
						<a
							href={item.link}
							target="_blank"
							rel="noreferrer"
							className="text__decoration--none text--white"
						>
							<div>{item.img}</div>
							<span>{item.title}</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlocksDropdown;
