import React, { useEffect, useState } from 'react';
import Category from './Category'

const Ballot = () => {

	const [ballot, setBallot] = useState()

	useEffect(() => getBallotData(), [], console.log(ballot))

	const getBallotData = () => {
		return fetch('/api/getBallotData').then(res => {
			return res.json();
		}).then(ballotObj => {
			setBallot(ballotObj.items)
		});
	}

	const arrayOfCategories = () => {
		return ballot.map(category => <Category categoryTitle={category.title} nominees={category.items} key={category.id} />)
	}

	return (
		<div className='ballot'>
			<h1>AWARDS 2021</h1>
			{ballot ? arrayOfCategories() : "Loading..."}
		</div>
	)
}

export default Ballot;