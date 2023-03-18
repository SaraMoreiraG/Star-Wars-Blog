import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CharacterCard( { id } ) {
	const imgSrc = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
	const { actions } = useContext(Context);

	useEffect (() => {
		if (localStorage.getItem('Character' + id) == null)
			actions.getCharacteres(id)
	}, []);

	const character = JSON.parse(localStorage.getItem(('Character' + id)));

	return (
	<>
		<Card className='p-0 border border-0' style={{ width: '16rem' }}>
			<Card.Img variant="top" src={imgSrc} />

			{character &&
			<Card.Body>
				<Card.Title>{character.name}</Card.Title>
				<div key={id}>
					<ul>
						<li>Gender: {character.gender}</li>
						<li>Hair Color: {character.hair_color}</li>
						<li>Eye Color: {character.eye_color}</li>
					</ul>
					<div className='d-flex justify-content-between'>
						<Link to={'/chardescription/' + character.name + '/' + id}>
							<Button variant="outline-primary" className='mt-2'>
								Learn more!
							</Button>
						</Link>
						<Button variant="outline-warning" className='mt-2'
						onClick={() => actions.saveFavorite(character.name)}>
							<i className="fa-regular fa-heart"></i>
						</Button>
					</div>
				</div>
			</Card.Body>
			}

		</Card>
	</>
	);
}

export default CharacterCard;
