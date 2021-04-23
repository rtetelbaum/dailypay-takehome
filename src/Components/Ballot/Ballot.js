import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Category from './Category'
import Modal from './Modal'

const Ballot = () => {

	const [ballot, setBallot] = useState()
	const [modalClicked, setModalClicked] = useState(false)
	const [vote, setVote] = useState({ picture: '', director: '', actor: '', actress: '', supActor: '', supActress: '', effects: '' })

	useEffect(() => getBallotData(), [])

	const getBallotData = () => {
		return fetch('/api/getBallotData')
			.then(res => res.json())
			.then(ballotObj => setBallot(ballotObj.items))
	}

	const arrayOfCategories = () => {
		return ballot.map(category =>
			<Category
				categoryTitle={category.title}
				categoryId={category.id}
				nominees={category.items}
				key={category.id}
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
			<NavBar />
			{ballot ? arrayOfCategories() : "Loading..."}
			{ballot ? <button className='submit-button' onClick={clickHandler}>SUBMIT BALLOT</button> : null}
			{
				modalClicked
					?
					<Modal
						modalClicked={modalClicked}
						setModalClicked={setModalClicked}
						vote={vote}
					/>
					:
					null
			}
		</div>
	)
}

export default Ballot