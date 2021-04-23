import React from 'react'

const Nominee = props => {

	const clickHandler = () => {
		props.setVotes(prevVotes => {
			return { ...prevVotes, [props.categoryTitle]: props.nominee.title }
		})
	}

	return (
		props.nominee.title === props.votes[props.categoryTitle]
			?
			<div className='selected-nominee'>
				<h3>{props.nominee.title}</h3>
				<img src={props.nominee.photoUrL} alt="Movie Poster" />
				<button className='vote-button'>SELECTED</button>
			</div>
			:
			<div className='nominee'>
				<h3>{props.nominee.title}</h3>
				<img src={props.nominee.photoUrL} alt="Movie Poster" />
				<br />
				<button className='vote-button' onClick={clickHandler}>VOTE</button>
			</div>
	)
}

export default Nominee