import React from "react";
import BackTop from "./components/backtop/BackTop";
import Navigation from "./components/navigation/Navigation";

function App() {
	return (
		<div className="app-container font-weight--500 font-size--16">
			<Navigation />
			<BackTop />
			<div style={{ height: "2000px" }}></div>
		</div>
	);
}

export default App;
