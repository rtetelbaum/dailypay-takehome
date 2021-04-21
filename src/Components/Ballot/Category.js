import React from 'react'
import Nominee from './Nominee'

const Category = (props) => {

	const arrayOfNominees = () => {
		return props.nominees.map(nominee => <Nominee nominee={nominee} key={nominee.id} />)
	}

	return (
		<div className='category'>
			<h2>{props.categoryTitle}</h2>
			{arrayOfNominees()}
		</div>
	)
}

export default Category