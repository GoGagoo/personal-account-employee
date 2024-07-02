import { Icons } from '../../../icons/icons'

const HistoryTable = () => {
	return (
		<div className='pt-4'>
			<ul className='grid grid-cols-3 text-zinc-400 border-b-[1px] border-b-zinc-600 py-4 items-center'>
				<li>Тип</li>
				<li>Даты отпуска</li>
				<li className='text-right'>Количество дней</li>
			</ul>
			<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отпуск</li>
				<li className='flex items-center gap-x-2'>
					03 марта 2023
					<span className='text-yellow-500'>
						<Icons.ArrowRight />
					</span>
					23 марта 2023
				</li>
				<li className='text-right'>20</li>
			</ul>
			<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отгул</li>
				<li className='flex items-center gap-x-2'>
					03 марта 2023
					<span className='text-red-500'>
						<Icons.ArrowRight />
					</span>
					23 марта 2023
				</li>
				<li className='text-right'>4</li>
			</ul>
			<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отгул</li>
				<li className='flex items-center gap-x-2'>
					03 марта 2023
					<span className='text-red-500'>
						<Icons.ArrowRight />
					</span>
					23 марта 2023
				</li>
				<li className='text-right'>4</li>
			</ul>
			<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отгул</li>
				<li className='flex items-center gap-x-2'>
					03 марта 2023
					<span className='text-red-500'>
						<Icons.ArrowRight />
					</span>
					23 марта 2023
				</li>
				<li className='text-right'>4</li>
			</ul>
			<ul className='grid grid-cols-3 transition hover:rounded-lg hover:bg-zinc-700 items-center py-3.5 text-zinc-200'>
				<li>Отгул</li>
				<li className='flex items-center gap-x-2'>
					03 марта 2023
					<span className='text-red-500'>
						<Icons.ArrowRight />
					</span>
					23 марта 2023
				</li>
				<li className='text-right'>4</li>
			</ul>
		</div>
	)
}

export default HistoryTable
