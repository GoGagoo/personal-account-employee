import ExitButton from './components/ExitButton'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'

export default function Home() {
	return (
		<main className='mx-52 mt-12 mb-14'>
			<Navbar />
			<ExitButton />
			<Header />
		</main>
	)
}
