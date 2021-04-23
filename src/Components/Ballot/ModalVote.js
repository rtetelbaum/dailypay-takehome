import React from 'react'

const ModalVote = props => {
	return (
		<>
			{
				props.vote
					?
					<p>{props.vote}</p>
					:
					<p>You didn't vote in this category</p>
			}
		</>
	)
}

export default ModalVote