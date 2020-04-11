import React, {useState} from 'react'
import axios from 'axios'

function DeleteForm() {
	const [testId, setTestId] = useState(0)

	const handleIdChange = event => {
		setTestId(Number(event.target.value))
	}

	const handleSubmit = event => {
		event.preventDefault()

		axios.delete(`http://localhost:8000/test/${testId}`)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<label>
					Test id: <input type="text" name="testid" onChange={(e) => handleIdChange(e)} />
				</label>
				<button type="submit">
					Delete Test
				</button>
			</form>
		</React.Fragment>
	)
}

export default DeleteForm