import React from 'react'

const NavBar = props => {

	return (
		<div className='navbar'>
			{props.ballot.map(category => <a href={`#${category.id}`} key={category.id}>{category.title}</a>)}
		</div>
	)
}

export default NavBar