import React from 'react'

const Nominee = (props) => {
	return (
		<div className='nominee'>
			<h3>{props.nominee.title}</h3>
			<img src={props.nominee.photoUrL} alt="Movie Poster" />
			<br />
			<button>Vote</button>
		</div>
	)
}

export default Nominee