import { useState } from 'react'
import NumberForm from './NumberForm'
const Container = () => {
	const [link, setLink] = useState('')
	return (
		<div className='flex flex-col space-y-20 content-between justify-center items-center p-10'>
			<header
				style={{ backgroundColor: '#fff5c4', color: '#696b54' }}
				className='p-1 rounded mt-6 shadow-md'
			>
				<h1 className='px-2 text-center'>
					Text any number on Whatsapp without saving it on your phone.
				</h1>
			</header>

			<NumberForm setLink={setLink} />

			<p>
				<a
					style={{ backgroundColor: '#00887a' }}
					className={`rounded text-white font-bold p-2 shadow-md ${
						link ? '' : 'invisible'
					}`}
					href={link}
				>
					Start Chatting
				</a>
			</p>
		</div>
	)
}

export default Container
