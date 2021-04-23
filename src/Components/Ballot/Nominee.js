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
				<h3 className='card-title'>{props.nominee.title}</h3>
				<div className='img-container'>
					<img src={props.nominee.photoUrL} alt="Movie Poster" />
				</div>
				<button className='vote-button'>SELECTED</button>
			</div>
			:
			<div className='nominee'>
				<h3 className='card-title'>{props.nominee.title}</h3>
				<div className='img-container'>
					<img src={props.nominee.photoUrL} alt="Movie Poster" />
				</div>
				<button className='vote-button' onClick={clickHandler}>VOTE</button>
			</div>
	)
}

export default Nominee