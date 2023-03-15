import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlanetCard( { id, name, url } ) {
//   const { store, actions } = useContext(Context);

//   useEffect (() => {
//     actions.getCharacter((url));
//   }, []);

  return (
  <>
    <Card className='p-0' style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
          <ul>
              <li>Gender: {id}</li>
              <li>Hair Color: unknow</li>
              <li>Eye Color: unknow</li>
          </ul>
          <Link to='/description'>
            <Button variant="primary">Go somewhere</Button>
          </Link>
      </Card.Body>
    </Card>
  </>
  );
}

export default PlanetCard;
