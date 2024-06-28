export const Icons = {
	ChevronDown: () => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6 text-gray-500 mr-4 transition group-hover:text-zinc-200 hover:cursor-pointer'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M19 9l-7 7-7-7'
				/>
			</svg>
		)
	},
	MenuBurger: () => {
		return (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				className='cursor-pointer text-gray-500 transition group-hover:text-zinc-100 '
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4Z'
					fill='currentColor'
				/>
			</svg>
		)
	},
	Chevron: () => {
		return (
			<svg
				width='8'
				height='14'
				viewBox='0 0 8 14'
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
				className='text-zinc-500 group-hover:text-zinc-100'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z'
					fill='currentColor'
				/>
			</svg>
		)
	},
}
