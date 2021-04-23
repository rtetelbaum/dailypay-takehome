import React from 'react'
import Nominee from './Nominee'

const Category = props => {

	return (
		<div className='category' id={props.categoryId}>
			<h2 className='category-title'>{props.categoryTitle}</h2>
			<div className='nominee-container'>
				{props.nominees.map(nominee =>
					<Nominee
						nominee={nominee}
						key={nominee.id}
						categoryTitle={props.categoryTitle}
						votes={props.votes}
						setVotes={props.setVotes}
					/>
				)}
			</div>
		</div>
	)
}

export default Category