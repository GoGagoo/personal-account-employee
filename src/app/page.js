import ExitButton from './components/ExitButton'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Navbar from './components/Navbar'

export default function Home() {
	return (
		<main className='mx-4 md:mx-16 lg:mx-[213px] mt-6 mb-24'>
			<Navbar />
			<ExitButton />
			<Header />
			<MainContent />
		</main>
	)
}
