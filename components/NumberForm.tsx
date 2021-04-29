import { useState } from 'react'

const NumberForm = () => {
	const [number, setNumber] = useState(null)
	const [countryCode, setCountryCode] = useState(null)

	return (
		<form>
			<label htmlFor='country'>Country : </label>
			<input id='country' list='country-list' name='country' />
			<datalist id='country-list'>
				<option value='India'></option>
			</datalist>

			<label htmlFor='phone'>Phone Number : </label>
			<input type='tel' id='phone' name='phone' pattern='/^[0-9]*$/' />
		</form>
	)
}

export default NumberForm
