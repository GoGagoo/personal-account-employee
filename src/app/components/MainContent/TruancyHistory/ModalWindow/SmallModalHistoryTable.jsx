import { useEffect } from 'react'
import { Icons } from '../../../../icons/icons'

const SmallModalHistoryTable = ({ handleCloseModal }) => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				handleCloseModal()
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleCloseModal])

	return (
		<div className='bg-zinc-800 p-8 rounded-xl shadow-lg'>
			<div className='flex justify-between items-center z-50'>
				<div className='md:text-2xl'>История отпусков</div>
				<button type='button' onClick={handleCloseModal}>
					<Icons.Close />
				</button>
			</div>
			<div className='mt-5 divide-y divide-[#363738]'>
				<div className='pb-4 sm:py-[30px]'>
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
				<div className='pt-4  pb-4 sm:py-[30px]'>
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
				<div className='pt-4 pb-4 sm:py-[30px]'>
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
				<div className='pt-4 pb-4 sm:py-[30px]'>
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
				<div className='pt-4 pb-4 sm:py-[30px]'>
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
		</div>
	)
}

export default SmallModalHistoryTable
