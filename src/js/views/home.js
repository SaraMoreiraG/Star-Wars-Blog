import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import VehicleCard from "../component/VehicleCard";
import PlanetCard from "../component/PlanetCard";

function Home () {
	const { store, actions } = useContext(Context);
	const localPeople = JSON.parse(localStorage.getItem('people'));

	return (
		<div className="body text-white bg-dark mb-5">
			<div className="container">
				<h2>Characters</h2>
				<ul className="cards">
					{localPeople && localPeople.map( person =>
						<CharacterCard
							key = {person.uid}
							id = {person.uid}
						/>
					)}
				</ul>
				<h2>Vehicles</h2>
				<ul className="cards">
					{store && store.vehicles.map( vehicle =>
						<VehicleCard
							key = {vehicle.uid}
							id = {vehicle.uid}
							name = {vehicle.name}
							url = {vehicle.url}
						/>
					)}
				</ul>
				<h2>Planets</h2>
				<ul className="cards pb-5">
					{store && store.planets.map( planet =>
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
