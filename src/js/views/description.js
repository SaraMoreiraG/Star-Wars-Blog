import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Description = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	//console.log(store.store.people[params.theid].name);

	return (
		<div>
			<div className="d-flex">
				<div>
					<img src="https://via.placeholder.com/800x600" />
				</div>
				<div className="text-center">
					<h1>{name}</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				</div>
			</div>
			<div className="row">
				<div className="col-2">
					<h3>Name</h3>
					<p>lo que sea</p>
				</div>
				<div className="col-2">
					<h3>Birth Year</h3>
					<p>lo que sea</p>
				</div>
				<div className="col-2">
					<h3>Gender</h3>
					<p>lo que sea</p>
				</div>
				<div className="col-2">
					<h3>Height</h3>
					<p>lo que sea</p>
				</div>
				<div className="col-2">
					<h3>Skin Color</h3>
					<p>lo que sea</p>
				</div>
				<div className="col-2">
					<h3>Eye Color</h3>
					<p>lo que sea</p>
				</div>
			</div>
		</div>
	);
};
