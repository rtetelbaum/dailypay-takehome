import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Category from './Category'
import Modal from './Modal'

const Ballot = () => {

	const [ballot, setBallot] = useState()
	const [showModal, setShowModal] = useState(false)
	const [votes, setVotes] = useState({})

	useEffect(() => getBallotData(), [])

	const getBallotData = () => {
		return fetch('/api/getBallotData')
			.then(res => res.json())
			.then(ballotObj => setBallot(ballotObj.items))
	}

	const onSubmit = () => {
		setShowModal(true)
	}

	return (
		<div className='ballot'>
			<h1>AWARDS 2021</h1>

			{ballot && <NavBar ballot={ballot} />}

			{ballot ? ballot.map(category =>
				<Category
					categoryTitle={category.title}
					categoryId={category.id}
					nominees={category.items}
					key={category.id}
					votes={votes}
					setVotes={setVotes}
				/>
			) : <h1>LOADING BALLOT...</h1>}

			{ballot && <button className='submit-button' onClick={onSubmit}>SUBMIT BALLOT</button>}

			{showModal &&
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					ballot={ballot}
					votes={votes}
				/>
			}
		</div>
	)
}

export default Ballot