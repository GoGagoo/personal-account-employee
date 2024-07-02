import { Icons } from '../../../icons/icons'

const SmallHistoryTable = () => {
	return (
		<div className='mt-5 divide-y divide-[#363738]'>
			<div className='px-4 pb-4 sm:py-[30px]'>
				<div className='space-y-2'>
					<span className='text-zinc-500'>Тип</span>
					<span className='block '>Отпуск</span>
				</div>
				<div className='mt-4 space-y-2 '>
					<span className='text-zinc-500'>Даты отпуска</span>
					<div className='flex items-center space-x-2'>
						<span>03 марта 2023</span>
						<span className='text-yellow-500'>
							<Icons.ArrowRight />
						</span>
						<span>23 марта 2023</span>
					</div>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Количество дней</span>
					<span className='block '>20</span>
				</div>
			</div>
			<div className='pt-4 px-4 pb-4 sm:py-[30px]'>
				<div className='space-y-2'>
					<span className='text-zinc-500'>Тип</span>
					<span className='block '>Больничный</span>
				</div>
				<div className='mt-4 space-y-2 '>
					<span className='text-zinc-500'>Даты отпуска</span>
					<div className='flex items-center space-x-2'>
						<span>03 марта 2023</span>
						<span className='text-red-500'>
							<Icons.ArrowRight />
						</span>
						<span>23 марта 2023</span>
					</div>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Количество дней</span>
					<span className='block '>4</span>
				</div>
			</div>
			<div className='pt-4 px-4 pb-4 sm:py-[30px]'>
				<div className='space-y-2 '>
					<span className='text-zinc-500'>Тип</span>
					<span className='block '>Больничный</span>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Даты отпуска</span>
					<div className='flex items-center space-x-2'>
						<span>03 марта 2023</span>
						<span className='text-red-500'>
							<Icons.ArrowRight />
						</span>
						<span>23 марта 2023</span>
					</div>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Количество дней</span>
					<span className='block '>4</span>
				</div>
			</div>
			<div className='pt-4 px-4 pb-4 sm:py-[30px]'>
				<div className='space-y-2'>
					<span className='text-zinc-500'>Тип</span>
					<span className='block '>Больничный</span>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Даты отпуска</span>
					<div className='flex items-center space-x-2'>
						<span>03 марта 2023</span>
						<span className='text-red-500'>
							<Icons.ArrowRight />
						</span>
						<span>23 марта 2023</span>
					</div>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Количество дней</span>
					<span className='block '>4</span>
				</div>
			</div>
			<div className='pt-4 px-4 pb-4 sm:py-[30px]'>
				<div className='space-y-2'>
					<span className='text-zinc-500'>Тип</span>
					<span className='block '>Больничный</span>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Даты отпуска</span>
					<div className='flex items-center space-x-2'>
						<span>03 марта 2023</span>
						<span className='text-red-500'>
							<Icons.ArrowRight />
						</span>
						<span>23 марта 2023</span>
					</div>
				</div>
				<div className='mt-4 space-y-2'>
					<span className='text-zinc-500'>Количество дней</span>
					<span className='block '>4</span>
				</div>
			</div>
		</div>
	)
}

export default SmallHistoryTable
