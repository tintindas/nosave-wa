import Head from 'next/head'
import Container from './Container'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<div>
			<Head>
				<title>NextJS and Tailwind Starter</title>
				<meta name='description' content='NextJS and Tailwind Starter' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div
				style={{
					backgroundImage: 'url("/wa-background.jpg")'
				}}
				className='h-screen'
			>
				<Navbar />

				<main>
					<Container />
				</main>
			</div>
		</div>
	)
}

export default Layout
