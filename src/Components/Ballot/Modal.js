import React from 'react'

const Modal = (props) => {

	const clickHandler = () => {
		props.setModalClicked(false)
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<div className='modal-close-div'>
					<button className='modal-close-button' onClick={clickHandler}>X</button>
				</div>
				<div className='modal-text'>
					<h1>Votes Submitted!</h1>
					<h3>Best Picture:</h3>
					<p>{props.vote.picture}</p>
					<h3>Best Director:</h3>
					<p>{props.vote.director}</p>
					<h3>Best Actor:</h3>
					<p>{props.vote.actor}</p>
					<h3>Best Actress:</h3>
					<p>{props.vote.actress}</p>
					<h3>Best Supporting Actor:</h3>
					<p>{props.vote.supActor}</p>
					<h3>Best Supporting Actress:</h3>
					<p>{props.vote.supActress}</p>
					<h3>Best Visual Effects:</h3>
					<p>{props.vote.effects}</p>
				</div>
			</div>
		</div>
	)
}

export default Modal