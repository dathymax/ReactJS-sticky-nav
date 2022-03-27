import React from "react";
import demos1 from "../../../../images/dropdown/demos-1.jpg";
import demos2 from "../../../../images/dropdown/demos-2.jpg";
import demos3 from "../../../../images/dropdown/demos-3.jpg";
import demos4 from "../../../../images/dropdown/demos-4.jpg";
import demos5 from "../../../../images/dropdown/demos-5.jpg";
import demos6 from "../../../../images/dropdown/demos-6.jpg";

const DemosDropdown = () => {
	const items = [
		{
			img: <img src={demos1} alt="" className="dropdown-img" />,
			link: "https://sandbox.elemisthemes.com/demo1.html",
		},
		{
			img: <img src={demos2} alt="" className="dropdown-img" />,
			link: "https://sandbox.elemisthemes.com/demo2.html",
		},
		{
			img: <img src={demos3} alt="" className="dropdown-img" />,
			link: "https://sandbox.elemisthemes.com/demo3.html",
		},
		{
			img: <img src={demos4} alt="" className="dropdown-img" />,
			link: "https://sandbox.elemisthemes.com/demo4.html",
		},
		{
			img: <img src={demos5} alt="" className="dropdown-img" />,
			link: "https://sandbox.elemisthemes.com/demo5.html",
		},
		{
			img: <img src={demos6} alt="" className="dropdown-img" />,
			link: "https://sandbox.elemisthemes.com/demo6.html",
		},
	];

	return (
		<div className="elements-dropdown">
			<div className="elements-dropdown__inner">
				{items.map((item, index) => (
					<div key={index} className="dropdown-img__wrapper">
						<a href={item.link} target="_blank" rel="noreferrer">
							{item.img}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default DemosDropdown;
