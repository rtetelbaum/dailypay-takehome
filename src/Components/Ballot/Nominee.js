import React from 'react'

const Nominee = (props) => {

	const clickHandler = () => {
		if (props.categoryTitle === "Best Picture") {
			props.setVote(prevVote => {return {...prevVote, picture: props.nominee.title}})
		} else if (props.categoryTitle === "Best Director") {
			props.setVote(prevVote => {return {...prevVote, director: props.nominee.title}})
		} else if (props.categoryTitle === "Best Actor") {
			props.setVote(prevVote => {return {...prevVote, actor: props.nominee.title}})
		} else if (props.categoryTitle === "Best Actress") {
			props.setVote(prevVote => {return {...prevVote, actress: props.nominee.title}})
		} else if (props.categoryTitle === "Best Supporting Actor") {
			props.setVote(prevVote => {return {...prevVote, supActor: props.nominee.title}})
		} else if (props.categoryTitle === "Best Supporting Actress") {
			props.setVote(prevVote => {return {...prevVote, supActress: props.nominee.title}})
		} else if (props.categoryTitle === "Best Visual Effects") {
			props.setVote(prevVote => {return {...prevVote, effects: props.nominee.title}})
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