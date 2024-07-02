import ExitButton from './components/ExitButton'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Navbar from './components/Navbar'

export default function Home() {
	return (
		<main className='mt-6 mb-6 md:mb-20'>
			<div className='mx-4 md:mx-16 lg:mx-[213px]'>
				<Navbar />
				<ExitButton />
			</div>
			<div className='mx-full md:mx-16 lg:mx-[213px]'>
				<Header />
				<MainContent />
			</div>
		</main>
	)
}
