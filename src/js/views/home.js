import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import VehicleCard from "../component/VehicleCard";
import PlanetCard from "../component/PlanetCard";

function Home () {
	const { store, actions } = useContext(Context);

	return (
		<div className="body text-white bg-dark">
			<div className="container">
				<h2>Characters</h2>
				<ul className="cards">
					{store.people.map( character =>
						<CharacterCard
							key = {character.uid}
							id = {character.uid}
							name = {character.name}
							url = {character.url}
						/>
					)}
				</ul>
				<h2>Vehicles</h2>
				<ul className="cards">
					{store.vehicles.map( vehicle =>
						<VehicleCard
							key = {vehicle.uid}
							id = {vehicle.uid}
							name = {vehicle.name}
							url = {vehicle.url}
						/>
					)}
				</ul>
				<h2>Planets</h2>
				<ul className="cards">
					{store.planets.map( planet =>
						<PlanetCard
							key = {planet.uid}
							id = {planet.uid}
							name = {planet.name}
							url = {planet.url}
						/>
					)}
				</ul>
				</div>
		</div>
	)
};

export default Home;
