import React, { useEffect, useState } from 'react';
import Category from './Category'
import Modal from './Modal'

const Ballot = () => {

	const [ballot, setBallot] = useState()
	const [modalClicked, setModalClicked] = useState(false)
	// const [picture, setPicture] = useState()
	// const [director, setDirector] = useState()
	// const [actor, setActor] = useState()
	// const [actress, setActress] = useState()
	// const [supActor, setSupActor] = useState()
	// const [supActress, setSupActress] = useState()
	// const [effects, setEffects] = useState()
	const [vote, setVote] = useState({picture: '', director: '', actor: '', actress: '', supActor: '', supActress: '', effects: ''})

	useEffect(() => getBallotData(), [])

	const getBallotData = () => {
		return fetch('/api/getBallotData').then(res => {
			return res.json();
		}).then(ballotObj => {
			setBallot(ballotObj.items)
		});
	}

	const arrayOfCategories = () => {
		return ballot.map(category =>
			<Category
				categoryTitle={category.title}
				nominees={category.items}
				key={category.id}
				// picture={picture} setPicture={setPicture}
				// director={director} setDirector={setDirector}
				// actor={actor} setActor={setActor}
				// actress={actress} setActress={setActress}
				// supActor={supActor} setSupActor={setSupActor}
				// supActress={supActress} setSupActress={setSupActress}
				// effects={effects} setEffects={setEffects}
				vote={vote}
				setVote={setVote}
			/>
		)
	}

	const clickHandler = () => {
		setModalClicked(true)
	}

	return (
		<div className='ballot'>
			<h1>AWARDS 2021</h1>
			{ballot ? arrayOfCategories() : "Loading..."}
			{ballot ? <button className='submit-button' onClick={clickHandler}>Submit Ballot</button> : null}
			{
				modalClicked
					?
					<Modal
						modalClicked={modalClicked}
						setModalClicked={setModalClicked}
						// picture={picture}
						// director={director}
						// actor={actor}
						// actress={actress}
						// supActor={supActor}
						// supActress={supActress}
						// effects={effects}
						vote={vote}
					/>
					:
					null
			}
		</div>
	)
}

export default Ballot;