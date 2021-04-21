import React, { useEffect, useState } from 'react';
import Category from './Category'

const Ballot = () => {

	const [ballot, setBallot] = useState()
	const [picture, setPicture] = useState()
	const [director, setDirector] = useState()
	const [actor, setActor] = useState()
	const [actress, setActress] = useState()
	const [supActor, setSupActor] = useState()
	const [supActress, setSupActress] = useState()
	const [effects, setEffects] = useState()

	useEffect(() => getBallotData(), [], console.log(ballot))

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
				picture={picture} setPicture={setPicture}
				director={director} setDirector={setDirector}
				actor={actor} setActor={setActor}
				actress={actress} setActress={setActress}
				supActor={supActor} setSupActor={setSupActor}
				supActress={supActress} setSupActress={setSupActress}
				effects={effects} setEffects={setEffects}
			/>
		)
	}

	return (
		<div className='ballot'>
			<h1>AWARDS 2021</h1>
			{ballot ? arrayOfCategories() : "Loading..."}
		</div>
	)
}

export default Ballot;