import React from 'react'
import NavBarCategory from './NavBarCategory'

const NavBar = props => {

	const categoriesArray = () => {
		return props.ballot.map(category =>
			<NavBarCategory
				categoryId={category.id}
				categoryTitle={category.title}
				key={category.id}
			/>
		)
	}

	return (
		<div className='navbar'>
			{categoriesArray()}
		</div>
	)
}

export default NavBar