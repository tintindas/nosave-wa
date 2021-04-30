import Head from 'next/head'
import Container from './Container'

const Layout = () => {
	return (
		<div>
			<Head>
				<title>NextJS and Tailwind Starter</title>
				<meta name='description' content='NextJS and Tailwind Starter' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main
				style={{
					backgroundImage: 'url("/wa-background.jpg")'
				}}
				className='flex justify-center items-center h-screen'
			>
				<Container />
			</main>
		</div>
	)
}

export default Layout
