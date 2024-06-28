import Image from 'next/image'
import { Icons } from '../icons/icons'

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between'>
			<Image width={180} height={40} src='/logo.png' alt='' />
			<div className='flex items-center space-x-5'>
				<div className='flex items-center border rounded-2xl transition border-[#363738] hover:border-zinc-100 py-[6px] pl-4'>
					<Image
						src='/avatar.png'
						alt='User Avatar'
						width={24}
						height={24}
						className='rounded-2xl'
					/>
					<div className=''>
						<Icons.ArrowDown />
					</div>
				</div>
				<div className=''>
					<Icons.MenuBurger />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
