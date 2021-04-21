import React from 'react'

const Modal = (props) => {

	const clickHandler = () => {
		props.setModalClicked(false)
	}

	return (
		<div className='modal'>
			<h1>Votes Submitted!</h1>
			<h3>Best Picture:</h3>
			<p>{props.picture}</p>
			<h3>Best Director:</h3>
			<p>{props.director}</p>
			<h3>Best Actor:</h3>
			<p>{props.actor}</p>
			<h3>Best Actress:</h3>
			<p>{props.actress}</p>
			<h3>Best Supporting Actor:</h3>
			<p>{props.supActor}</p>
			<h3>Best Supporting Actress:</h3>
			<p>{props.supActress}</p>
			<h3>Best Visual Effects:</h3>
			<p>{props.effects}</p>
			<button id='modal-close' onClick={clickHandler}>X</button>
		</div>
	)
}

export default Modal