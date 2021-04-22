import React from 'react'
import Nominee from './Nominee'

const Category = (props) => {

	const arrayOfNominees = () => {
		return props.nominees.map(nominee =>
			<Nominee
				nominee={nominee}
				key={nominee.id}
				categoryTitle={props.categoryTitle}
				picture={props.picture} setPicture={props.setPicture}
				director={props.director} setDirector={props.setDirector}
				actor={props.actor} setActor={props.setActor}
				actress={props.actress} setActress={props.setActress}
				supActor={props.supActor} setSupActor={props.setSupActor}
				supActress={props.supActress} setSupActress={props.setSupActress}
				effects={props.effects} setEffects={props.setEffects}
			/>
		)
	}

	return (
		<div className='category'>
			<h2 className='category-title'>{props.categoryTitle}</h2>
			<div className='nominee-container'>
				{arrayOfNominees()}
			</div>
		</div>
	)
}

export default Category