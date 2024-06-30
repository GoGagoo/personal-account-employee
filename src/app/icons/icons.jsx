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
	Info: () => {
		return (
			<svg
				width='24'
				height='24'
				viewBox='0 0 22 22'
				fill='currentColor'
				className='mb-3 text-zinc-500 hover:border-zinc-200'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z'
					fill='currentColor'
				/>
				<path
					d='M11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H11.01C11.5623 8 12.01 7.55228 12.01 7C12.01 6.44772 11.5623 6 11.01 6H11Z'
					fill='currentColor'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183ZM11 2C8.61305 2 6.32387 2.94821 4.63604 4.63604C2.94821 6.32387 2 8.61305 2 11C2 13.3869 2.94821 15.6761 4.63604 17.364C6.32387 19.0518 8.61305 20 11 20C13.3869 20 15.6761 19.0518 17.364 17.364C19.0518 15.6761 20 13.3869 20 11C20 8.61305 19.0518 6.32387 17.364 4.63604C15.6761 2.94821 13.3869 2 11 2Z'
					fill='currentColor'
				/>
			</svg>
		)
	},
	ArrowRight: () => {
		return (
			<svg
				width='18'
				height='14'
				viewBox='0 0 18 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L14.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H14.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683417 10.2929 0.292893Z'
					fill='currentColor'
				/>
			</svg>
		)
	},
}
