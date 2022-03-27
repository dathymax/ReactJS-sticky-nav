import React from "react";
import BlocksDropdown from "./dropdown-items/BlocksDropdown";
import DemosDropdown from "./dropdown-items/DemosDropdown";

const Elements = () => {
	const items = [
		{
			title: "Demos",
			icon: <div className="triangle-down" />,
			children: <DemosDropdown />,
		},
		{
			title: "Pages",
			icon: <div className="triangle-down" />,
		},
		{
			title: "Projects",
			icon: <div className="triangle-down" />,
		},
		{
			title: "Blog",
			icon: <div className="triangle-down" />,
		},
		{
			title: "Blocks",
			icon: <div className="triangle-down" />,
			children: <BlocksDropdown />,
		},
		{
			title: "Documentation",
			icon: <div className="triangle-down" />,
		},
	];

	return (
		<ul className="elements-items">
			{items.map((item, index) => (
				<li key={index} className="elements-item">
					<a href="/" className="elements-item--link">
						{item.title}
					</a>
					{item.children}
				</li>
			))}
		</ul>
	);
};

export default Elements;
