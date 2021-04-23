import React from 'react'
import ModalVote from './ModalVote'

const ModalCategory = props => {
	let vote

	if (props.votes[props.title]) {
		vote = props.votes[props.title]
	} else {
		vote = null
	}

	return (
		<>
			<h3>{props.title}</h3>
			<ModalVote vote={vote} />
		</>
	)
}

export default ModalCategory