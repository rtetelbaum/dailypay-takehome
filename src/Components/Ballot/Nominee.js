import React from 'react'

const Nominee = (props) => {

	const clickHandler = () => {
		if (props.categoryTitle === "Best Picture") {
			props.setPicture(props.nominee.title)
		} else if (props.categoryTitle === "Best Director") {
			props.setDirector(props.nominee.title)
		} else if (props.categoryTitle === "Best Actor") {
			props.setActor(props.nominee.title)
		} else if (props.categoryTitle === "Best Actress") {
			props.setActress(props.nominee.title)
		} else if (props.categoryTitle === "Best Supporting Actor") {
			props.setSupActor(props.nominee.title)
		} else if (props.categoryTitle === "Best Supporting Actress") {
			props.setSupActress(props.nominee.title)
		} else if (props.categoryTitle === "Best Visual Effects") {
			props.setEffects(props.nominee.title)
		}
	}

	return (
		props.picture === props.nominee.title 
		|| props.director === props.nominee.title 
		|| props.actor === props.nominee.title 
		|| props.actress === props.nominee.title
		|| props.supActor === props.nominee.title
		|| props.supActress === props.nominee.title
		|| props.effects === props.nominee.title
			?
			<div className='selected-nominee'>
				<h3>{props.nominee.title}</h3>
				<img src={props.nominee.photoUrL} alt="Movie Poster" />
				<br />
				<button onClick={clickHandler}>Vote</button>
			</div>
			:
			<div className='nominee'>
				<h3>{props.nominee.title}</h3>
				<img src={props.nominee.photoUrL} alt="Movie Poster" />
				<br />	
				<button className='vote-button' onClick={clickHandler}>Vote</button>
			</div>
	)
}

export default Nominee