import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharDescription } from "./views/charDescription";
import { VehicleDescription } from "./views/vehicleDescription";
import { PlanetDescription } from "./views/planetDescription";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/chardescription/:name/:id" element={<CharDescription />} />
						<Route path="/vehicledescription/:name/:id" element={<VehicleDescription />} />
						<Route path="/planetdescription/:name/:id" element={<PlanetDescription />} />
						<Route path="/planetdescription/:name/:id" element={<PlanetDescription />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
