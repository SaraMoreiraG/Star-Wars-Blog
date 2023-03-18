import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import VehicleCard from "../component/VehicleCard";
import PlanetCard from "../component/PlanetCard";

function Home () {
	const { store } = useContext(Context);
	const localPeople = JSON.parse(localStorage.getItem('people'));
	const localVehicles = JSON.parse(localStorage.getItem('vehicles'));
	const localPlanets = JSON.parse(localStorage.getItem('planets'));

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
					{localVehicles && localVehicles.map( vehicle =>
						<VehicleCard
							key = {vehicle.uid}
							id = {vehicle.uid}
						/>
					)}
				</ul>
				<h2>Planets</h2>
				<ul className="cards pb-5">
					{localPlanets && localPlanets.map( planet =>
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
