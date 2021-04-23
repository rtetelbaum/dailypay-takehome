import React from 'react'
import ModalVote from './ModalVote'

const Modal = props => {

	const clickHandler = () => {
		props.setModalClicked(false)
	}

	const submittedVotesArray = () => {
		const votesArray = []
		Object.entries(props.votes).forEach(([key, value]) =>
			votesArray.push(
				<ModalVote
					category={key}
					vote={value}
					key={key}
				/>
			))
		return votesArray
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<div className='modal-close-div'>
					<button className='modal-close-button' onClick={clickHandler}>X</button>
				</div>
				<div className='modal-text'>
					<h1>Your Votes:</h1>
					{submittedVotesArray().length === 0
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