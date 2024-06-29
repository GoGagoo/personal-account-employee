import Image from 'next/image'

const EmployeeInfoCard = () => {
	return (
		<div>
			<div className='flex items-center'>
				<div>
					<Image
						className='rounded-full'
						src='/avatar.png'
						width={160}
						height={160}
						alt=''
					/>
				</div>
				<div className='whitespace-normal font-bold text-5xl ml-12 leading-[56px]'>
					Иванов
					<br />
					Иван Иванович
				</div>
			</div>
			<div>
				<div className='flex flex-col gap-y-4'>
					<div className='ml-52 mt-2'>Junior UI/UX designer</div>
					<div className='ml-52'>
						Россия, Красноярск <span className='text-zinc-500'>• 14:03</span>{' '}
					</div>
				</div>
			</div>
			<div className='flex items-center mt-14 text-[14px] group uppercase font-bold mr-4'>
				<div className='flex-none border-b-2 transition group-hover:border-zinc-200 border-zinc-700 ml-2 text-zinc-500 hover:text-zinc-200 cursor-pointer'>
					<div>Основная информация</div>
				</div>
				<div className='border-b-2 border-zinc-700 text-transparent transition group-hover:border-zinc-200'>
					<span>111111</span>
				</div>
				<div className='flex border-b-4 border-blue-800 cursor-pointer mr-5'>
					<div>Отпуск</div>
				</div>
			</div>
		</div>
	)
}

export default EmployeeInfoCard
