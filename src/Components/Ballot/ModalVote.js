import React from 'react'

const ModalVote = props => {
	return (
		<>
			<h3>{props.category}</h3>
			<p>{props.vote}</p>
		</>
	)
}

export default ModalVote