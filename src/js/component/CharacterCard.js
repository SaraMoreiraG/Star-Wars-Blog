import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CharacterCard( { id, name, url } ) {
	const imgSrc = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
	const { store, actions } = useContext(Context);

	useEffect (() => {
		actions.getCharacteres((url))
	}, []);

	const character = store.characteres.filter(character => character.name == name);
	return (
	<>
		<Card className='p-0 border border-0' style={{ width: '16rem' }}>
			<Card.Img variant="top" src={imgSrc} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				{character.map( character =>
					<>
					<div key={id}>
						<ul>
							<li>Gender: {character.gender}</li>
							<li>Hair Color: {character.hair_color}</li>
							<li>Eye Color: {character.eye_color}</li>
						</ul>
						<div className='d-flex justify-content-between'>
							<Link to={'/description/' + character.name + '/' + id}>
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

export default CharacterCard;
