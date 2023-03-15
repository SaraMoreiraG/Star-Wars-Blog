import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CharacterCard( { id, name, url } ) {
	const { store, actions } = useContext(Context);

	useEffect (() => {
		actions.getCharacter((url))
		.then((x)=> console.log(x[0].gender) );
	}, []);

	console.log(store.character)  // <---- WORKING
	console.log(store.character[0])  // <---- WORKING
	//console.log(store.character[0].gender)  // <---- NOT WORKING!!!
	//store.characater.map(el=>console.log(el.gender))
	//store.characater && store.characater.map(el=>console.log(el.gender))
	//store.characater.map(el=>console.log(el))
	//const charStore = store.character.filter(char => char.name == props.character.name);

  return (
  <>
    <Card className='p-0' style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
			{/* <ul>
			{store.character.map( character =>
				<>
				<li>Gender: {character.gender}</li>
				<li>Hair Color: {character.hair_color}</li>
				<li>Eye Color: {character.eye_color}</li>
				</>
			)}
			</ul> */}
          {/* <ul>
              <li>Gender: {id}</li>
              <li>Hair Color: unknow</li>
              <li>Eye Color: unknow</li>
          </ul> */}
          <Link to='/description'>
            <Button variant="primary">Go somewhere</Button>
          </Link>
      </Card.Body>
    </Card>
  </>
  );
}

export default CharacterCard;
