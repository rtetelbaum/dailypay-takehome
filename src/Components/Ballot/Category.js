import React from 'react'
import Nominee from './Nominee'

const Category = (props) => {

	const arrayOfNominees = () => {
		return props.nominees.map(nominee =>
			<Nominee
				nominee={nominee}
				key={nominee.id}
				categoryTitle={props.categoryTitle}
				vote={props.vote}
				setVote={props.setVote}
			/>
		)
	}

	return (
		<div className='category' id={props.categoryId}>
			<h2 className='category-title'>{props.categoryTitle}</h2>
			<div className='nominee-container'>
				{arrayOfNominees()}
			</div>
		</div>
	)
}

export default Category