import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
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
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Bootstrap" height="100" />
			</div>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
