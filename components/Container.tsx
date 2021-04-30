import { useState } from 'react'
import NumberForm from './NumberForm'
const Container = () => {
	const [link, setLink] = useState(null)
	return (
		<div
			style={{ backgroundColor: '#e1ffc7' }}
			className='rounded-lg flex flex-col justify-center items-center p-10'
		>
			<NumberForm setLink={setLink} />
		</div>
	)
}

export default Container
