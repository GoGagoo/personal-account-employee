import Image from 'next/image'
import { Icons } from '../icons/icons'

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between'>
			<Image
				className='cursor-pointer hover:opacity-65 transition'
				width={180}
				height={40}
				src='/logo.png'
				alt=''
			/>
			<div className='flex items-center space-x-5'>
				<div className='flex items-center border rounded-2xl transition cursor-pointer hover:opacity-65 border-[#363738] group hover:border-zinc-100 py-[6px] pl-4'>
					<Image
						src='/avatar.png'
						alt=''
						width={24}
						height={24}
						className='rounded-2xl cursor-pointer'
					/>
					<div className=''>
						<Icons.ChevronDown />
					</div>
				</div>
				<div className='group'>
					<Icons.MenuBurger />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
