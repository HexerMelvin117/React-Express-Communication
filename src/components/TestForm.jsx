import React, { useState } from 'react'
import axios from 'axios'

function TestForm() {
	const [testId, setTestId] = useState(0)
	const [testName, setTestName] = useState("")

	const handleIdChange = event => {
		setTestId(Number(event.target.value))
	}

	const handleNameChange = event => {
		setTestName(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		let test = {
			id: testId,
			name: testName
		}

		axios.post(`http://localhost:8000/test`, test)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return(
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<label>
					Test id: <input type="text" name="testid" onChange={(e) => handleIdChange(e)} />
				</label>
				<br></br>
				<label>
					Test name: <input type="text" name="name" onChange={(e) => handleNameChange(e)} />
				</label>
				<br></br>
				<button type="submit">
					Add Test
				</button>
			</form>
		</React.Fragment>
	)
}

export default TestForm
