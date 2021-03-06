import Head from 'next/head'
import Container from './Container'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
	return (
		<main
			style={{
				backgroundImage: 'url("/wa-background.jpg")'
			}}
			className='h-screen flex flex-col'
		>
			<Head>
				<title>No Save WA</title>
				<meta name='description' content='NextJS and Tailwind Starter' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>

			<Navbar />

			<Container />

			<Footer />
		</main>
	)
}

export default Layout
