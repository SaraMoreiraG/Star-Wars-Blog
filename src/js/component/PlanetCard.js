import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlanetCard( { id, name, url } ) {
	const imgSrc = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg";
	const { store, actions } = useContext(Context);

	useEffect (() => {
		actions.getPlanets((url))
	}, []);

	const planet = store.planetInfo.filter(planet => planet.name == name);

	return (
	<>
		<Card className='p-0 border border-0' style={{ width: '16rem' }}>
			<Card.Img variant="top" src={imgSrc} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				{planet.map( planet =>
					<>
					<div key={id}>
						<ul>
							<li>Population: {planet.population}</li>
							<li>Terrain: {planet.terrain}</li>
						</ul>
						<div className='d-flex justify-content-between'>
							<Link to={'/planetdescription/' + planet.name + '/' + id}>
								<Button variant="outline-primary" className='mt-2'>
									Learn more!
								</Button>
							</Link>
							<Button variant="outline-warning" className='mt-2'
							onClick={() => actions.saveFavorite({name})}>
								<i className="fa-regular fa-heart"></i>
							</Button>
						</div>
					</div>
					</>
				)}
			</Card.Body>
		</Card>
	</>
	);
}

export default PlanetCard;
