import React from 'react'

const Nominee = (props) => {

	const clickHandler = () => {
		const mapping = {
			picture: 'Best Picture',
			director: 'Best Director',
			actor: 'Best Actor',
			actress: 'Best Actress',
			supActor: 'Best Supporting Actor',
			supActress: 'Best Supporting Actress',
			effects: 'Best Visual Effects',
		}

		for (const obj in mapping) {
			if (props.categoryTitle === mapping[obj]) {
				props.setVote(prevVote => { return { ...prevVote, [obj]: props.nominee.title } })
			}
		}
	}

	return (
		props.vote.picture === props.nominee.title
			|| props.vote.director === props.nominee.title
			|| props.vote.actor === props.nominee.title
			|| props.vote.actress === props.nominee.title
			|| props.vote.supActor === props.nominee.title
			|| props.vote.supActress === props.nominee.title
			|| props.vote.effects === props.nominee.title
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