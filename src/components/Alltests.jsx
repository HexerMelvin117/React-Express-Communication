import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Alltests() {
	const [testsList, setTestsList] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:8000/test`)
			.then(res => {
				const tests = res.data
				setTestsList(tests)
			})
	})

	return (
		<ul>
			{testsList.map(test => <li key={test.id}>{test.name}</li>)}
		</ul>
	)
}

export default Alltests