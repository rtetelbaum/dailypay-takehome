import React from 'react'

const Modal = props => {

	return (
		<div className='modal'>
			<div className='modal-content'>
				<div className='modal-close-div'>
					<button className='modal-close-button' onClick={() => props.setShowModal(false)}>X</button>
				</div>
				<div className='modal-text'>
					<h1>Your Votes:</h1>
					{Object.keys(props.votes).length === 0
						?
						<h3>You didn't vote in any categories, please try again!</h3>
						:
						props.ballot.map(category => 
							<div key={category.id}>
								<h3>{category.title}</h3>
								<p>{props.votes[category.title] || "You didn't vote in this category"}</p>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Modal