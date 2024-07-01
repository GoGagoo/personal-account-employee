import Image from 'next/image'

const EmployeeInfoCard = () => {
	return (
		<div>
			<div className='flex flex-col sm:flex-row items-center'>
				<div>
					<Image
						className='rounded-full'
						src='/avatar.png'
						width={160}
						height={160}
						alt=''
					/>
				</div>
				<div className='whitespace-normal font-bold text-center sm:text-left text-2xl sm:text-5xl mt-4 sm:mt-0 sm:ml-12 leading-8 sm:leading-[56px]'>
					Иванов
					<br />
					Иван Иванович
				</div>
			</div>
			<div className='flex flex-col items-center sm:items-start mt-4 sm:mt-0'>
				<div className='text-center sm:text-left sm:ml-52 mt-2'>
					Junior UI/UX designer
				</div>
				<div className='text-center sm:text-left sm:ml-52 mt-4'>
					Россия, Красноярск <span className='text-zinc-500'>• 14:03</span>
				</div>
			</div>
			<div className='flex items-center justify-center sm:justify-start mt-6 sm:mt-[52px] text-[14px] group uppercase font-bold sm:mr-4'>
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
