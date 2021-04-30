import { FormEvent, useState } from 'react'
import * as countries from '../assets/CountryCodes.json'

const NumberForm = ({ setLink }) => {
	const [number, setNumber] = useState(null)
	const [countryCode, setCountryCode] = useState(null)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		// https://api.whatsapp.com/send/?phone=919910738448
		const new_link = `https://api.whatsapp.com/send/?phone=${countries[countryCode]}${number}`
		setLink(new_link)
	}

	return (
		<form
			style={{ backgroundColor: '#e1ffc7' }}
			className='flex flex-col'
			onSubmit={(e) => handleSubmit(e)}
		>
			<fieldset className='m-2'>
				<label htmlFor='country'>Country : </label>
				<input
					id='country'
					list='country-list'
					name='country'
					className='rounded'
					onChange={(e) => setCountryCode(e.target.value)}
				/>
				<datalist id='country-list'>
					{Object.keys(countries).map((country) => {
						return <option key={country} value={country} />
					})}
				</datalist>
			</fieldset>

			<fieldset className='m-2'>
				<label htmlFor='phone'>Number : </label>
				<input
					type='tel'
					id='phone'
					name='phone'
					// pattern='/^[0-9]*$/gm'
					className='rounded'
					onChange={(e) => setNumber(e.target.value)}
				/>
			</fieldset>

			<label htmlFor='submit'></label>
			<button type='submit' className='mt-4'>
				Generate Link
			</button>
		</form>
	)
}

export default NumberForm
