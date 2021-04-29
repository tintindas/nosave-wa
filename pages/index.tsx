import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>NextJS and Tailwind Starter</title>
				<meta name='description' content='NextJS and Tailwind Starter' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1 className='text-lg'>NextJS and Tailwind Starter</h1>
			</main>

			<footer></footer>
		</div>
	)
}
