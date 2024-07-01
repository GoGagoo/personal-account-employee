import { useEffect } from 'react'
import { Icons } from '../../../../icons/icons'

const ModalHistoryTable = ({ handleCloseModal }) => {
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
			<div className='flex justify-between items-center'>
				<div className='text-2xl'>История отпусков</div>
				<button type='button' onClick={handleCloseModal}>
					<Icons.Close />
				</button>
			</div>
			<div className='mt-5'>
				<ul className='grid grid-cols-3 text-zinc-400 border-b-[1px] border-b-zinc-600 py-3 items-center'>
					<li>Тип</li>
					<li>Даты</li>
					<li className='text-right'>Количество дней</li>
				</ul>
				<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
					<li>Отпуск</li>
					<li className='flex items-center'>
						03 марта 2023
						<span className='text-yellow-500 px-[11px]'>
							<Icons.ArrowRight />
						</span>
						23 марта 2023
					</li>
					<li className='text-right'>20</li>
				</ul>
				<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
					<li>Отгул</li>
					<li className='flex items-center'>
						03 марта 2023
						<span className='text-red-500 px-[11px]'>
							<Icons.ArrowRight />
						</span>
						23 марта 2023
					</li>
					<li className='text-right'>4</li>
				</ul>
				<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
					<li>Отгул</li>
					<li className='flex items-center'>
						03 марта 2023
						<span className='text-red-500 px-[11px]'>
							<Icons.ArrowRight />
						</span>
						23 марта 2023
					</li>
					<li className='text-right'>4</li>
				</ul>
				<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
					<li>Отгул</li>
					<li className='flex items-center'>
						03 марта 2023
						<span className='text-red-500 px-[11px]'>
							<Icons.ArrowRight />
						</span>
						23 марта 2023
					</li>
					<li className='text-right'>4</li>
				</ul>
				<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200'>
					<li>Отгул</li>
					<li className='flex items-center'>
						03 марта 2023
						<span className='text-red-500 px-[11px]'>
							<Icons.ArrowRight />
						</span>
						23 марта 2023
					</li>
					<li className='text-right'>4</li>
				</ul>
			</div>
		</div>
	)
}

export default ModalHistoryTable
