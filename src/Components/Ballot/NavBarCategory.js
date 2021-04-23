import React from 'react'

const NavBarCategory = props => {
	return (
		<>
			<a href={`#${props.categoryId}`}>{props.categoryTitle}</a>
		</>
	)
}

export default NavBarCategory