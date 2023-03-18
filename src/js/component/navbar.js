import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTrash } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let fav;
	let trash;

	if (store.favorites){
		if (store.favorites[0] === 'Empty')
			fav = 0;
		else{
			trash = <FontAwesomeIcon icon={faTrash} />
			fav = store.favorites.length;
		}
	}

	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<div className="nav-item dropdown">
				<button type="button" className="btn btn-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><FontAwesomeIcon icon={faBars} /></button>
				<ul className="dropdown-menu">
				<Link to="/Planets">
					<li>
						<div className="dropdown-item">People</div>
					</li>
				</Link>

				<li><a className="dropdown-item" href="#">Vehicles</a></li>
				<li><a className="dropdown-item" href="#">Planets</a></li>
				</ul>
			</div>
			<Link to="/">
			<div className="navbar-brand">
				<img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" alt="Bootstrap" height="100" />
			</div>
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Favorites
						<span className="bg-secondary rounded ms-1 p-1">{fav}</span>
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites && store.favorites.map( (favorite, key) =>
						<>
							<Dropdown.Item
								key={key}
								className="d-flex"
								onClick={() => actions.deleteFavorite(key)}>
									<div className="me-1">
										{favorite}
									</div>
									<div className="ms-auto">
										{trash}
									</div>

							</Dropdown.Item>
						</>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
