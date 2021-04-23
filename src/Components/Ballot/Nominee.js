import React from 'react'

const Nominee = props => {

	const onVote = () => {
		props.setVotes(prevVotes => {
			return { ...prevVotes, [props.categoryTitle]: props.nominee.title }
		})
	}

	const hasVote = props.nominee.title === props.votes[props.categoryTitle]

	return (
		<div className={hasVote ? 'selected-nominee' : 'nominee'}>
			<h3 className='card-title'>{props.nominee.title}</h3>
			<div className='img-container'>
				<img src={props.nominee.photoUrL} alt="Movie Poster" />
			</div>
			{hasVote ? <button className='vote-button'>SELECTED</button> : <button className='vote-button' onClick={onVote}>VOTE</button>}
		</div>
	)
}

export default Nominee