import React from 'react'

function cardProperties() {
	return (
		<div>
			<ul>
				<li>Gender: </li>
				<li>Hair Color: </li>
				<li>Eye Color: </li>
			</ul>
			{/* <div className='d-flex justify-content-between'>
				<Link to={'/chardescription/' + character.name + '/' + id}>
					<Button variant="outline-primary" className='mt-2'>
						Learn more!
					</Button>
				</Link>
				<Button variant="outline-warning" className='mt-2'
				onClick={() => actions.saveFavorite({name})}>
					<i className="fa-regular fa-heart"></i>
				</Button>
			</div> */}
		</div>
	)
}

export default cardProperties
