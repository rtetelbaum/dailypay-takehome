import React from 'react'
import ModalCategory from './ModalCategory'

const Modal = props => {

	const clickHandler = () => {
		props.setModalClicked(false)
	}

	const submittedVotesArray = () => {
		return props.ballot.map(category =>
			<ModalCategory
				title={category.title}
				votes={props.votes}
				key={category.id}
			/>
		)
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<div className='modal-close-div'>
					<button className='modal-close-button' onClick={clickHandler}>X</button>
				</div>
				<div className='modal-text'>
					<h1>Your Votes:</h1>
					{Object.keys(props.votes).length === 0
						?
						<h3>You didn't vote in any categories, please try again!</h3>
						:
						submittedVotesArray()
					}
				</div>
			</div>
		</div>
	)
}

export default Modal