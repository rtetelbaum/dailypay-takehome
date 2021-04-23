import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Category from './Category'
import Modal from './Modal'

const Ballot = () => {

	const [ballot, setBallot] = useState()
	const [modalClicked, setModalClicked] = useState(false)
	const [votes, setVotes] = useState({})

	useEffect(() => getBallotData(), [])

	const getBallotData = () => {
		return fetch('/api/getBallotData')
			.then(res => res.json())
			.then(ballotObj => setBallot(ballotObj.items))
	}

	const categoriesArray = () => {
		return ballot.map(category =>
			<Category
				categoryTitle={category.title}
				categoryId={category.id}
				nominees={category.items}
				key={category.id}
				votes={votes}
				setVotes={setVotes}
			/>
		)
	}

	const clickHandler = () => {
		setModalClicked(true)
	}

	return (
		<div className='ballot'>
			<h1>AWARDS 2021</h1>
			{ballot ? <NavBar ballot={ballot} /> : null}
			{ballot ? categoriesArray() : <h1>LOADING BALLOT...</h1>}
			{ballot ? <button className='submit-button' onClick={clickHandler}>SUBMIT BALLOT</button> : null}
			{
				modalClicked
					?
					<Modal
						modalClicked={modalClicked}
						setModalClicked={setModalClicked}
						ballot={ballot}
						votes={votes}
					/>
					:
					null
			}
		</div>
	)
}

export default Ballot