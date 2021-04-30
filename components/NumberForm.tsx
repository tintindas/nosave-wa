import { ChangeEvent, FormEvent, useState } from 'react'
import * as countries from '../assets/CountryCodes.json'

const NumberForm = ({ setLink }) => {
	const [number, setNumber] = useState('')
	const [countryCode, setCountryCode] = useState('')
	const [countryError, setCountryError] = useState(false)
	const [numberError, setNumberError] = useState(false)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const valid = countryCode in countries && number

		if (valid) {
			const new_link = `https://api.whatsapp.com/send/?phone=${countries[countryCode]}${number}`
			setLink(new_link)
		} else {
			if (!(countryCode in countries)) {
				setCountryError(true)
			}
			if (number == '') {
				setNumberError(true)
			}
		}
	}

	return (
		<form
			style={{ backgroundColor: '#e1ffc7' }}
			className='flex flex-col rounded-lg p-6'
			onSubmit={(e) => handleSubmit(e)}
		>
			<fieldset className='m-2'>
				<label htmlFor='country'>Country : </label>
				<input
					value={countryCode}
					id='country'
					list='country-list'
					name='country'
					className='rounded block mt-1'
					onChange={(e) => {
						setCountryCode(e.target.value)
						if (e.target.value in countries) {
							setCountryError(false)
						}
					}}
				/>
				<datalist id='country-list'>
					{Object.keys(countries).map((country) => {
						return <option key={country} value={country} />
					})}
				</datalist>
				<span
					className={`block text-xs text-red-700 mt-1 ${
						!countryError ? 'invisible' : ''
					}`}
				>
					Unrecognised country. Select country from list.
				</span>
			</fieldset>

			<fieldset className='m-2'>
				<label htmlFor='phone'>Number : </label>
				<input
					value={number}
					type='tel'
					id='phone'
					name='phone'
					pattern='^[0-9]+$'
					className='rounded block mt-1'
					onChange={(e) => {
						setNumber(e.target.value)
						setNumberError(e.target.value == '')
					}}
				/>
				<span
					className={`block text-xs text-red-700 mt-1 ${
						!numberError ? 'invisible' : ''
					}`}
				>
					Please enter a phone number.
				</span>
			</fieldset>

			<label htmlFor='submit'></label>
			<button
				type='submit'
				className='mt-4 w-1/2 rounded text-white py-1 shadow-md self-center'
				style={{ backgroundColor: '#34b6f0' }}
			>
				Generate Link
			</button>
		</form>
	)
}

export default NumberForm
