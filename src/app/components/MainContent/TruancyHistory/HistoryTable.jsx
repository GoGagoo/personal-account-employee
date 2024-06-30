import { Icons } from '../../../icons/icons'

const HistoryTable = () => {
	return (
		<div className='mt-10 space-y-3'>
			<ul className='flex justify-between items-center py-5 font-poppins text-zinc-400 border-b-[1px] border-b-zinc-600'>
				<li>Тип</li>
				<li>Даты</li>
				<li>Количество дней</li>
			</ul>
			<ul className='flex justify-between transition hover:rounded-md hover:bg-zinc-700 items-center  py-3 font-poppins text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отпуск</li>
				<li className='ml-20 flex items-center'>
					03 марта 2023{' '}
					<span className='text-yellow-500 px-[11px]'>
						<Icons.ArrowRight />
					</span>{' '}
					23 марта 2023
				</li>
				<li>20</li>
			</ul>
			<ul className='flex justify-between items-center transition hover:rounded-md hover:bg-zinc-700 py-3 font-poppins text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отгул</li>
				<li className='ml-20 flex items-center'>
					03 марта 2023{' '}
					<span className='text-red-500 px-[11px]'>
						<Icons.ArrowRight />
					</span>{' '}
					23 марта 2023
				</li>
				<li>20</li>
			</ul>
			<ul className='flex justify-between items-center transition hover:rounded-md hover:bg-zinc-700 py-3 font-poppins text-zinc-200 border-b-[1px] border-b-zinc-600'>
				<li>Отгул</li>
				<li className='ml-20 flex items-center'>
					03 марта 2023{' '}
					<span className='text-red-500 px-[11px]'>
						<Icons.ArrowRight />
					</span>{' '}
					23 марта 2023
				</li>
				<li>20</li>
			</ul>
			<ul className='flex justify-between items-center transition hover:rounded-md hover:bg-zinc-700 py-3 font-poppins text-zinc-200'>
				<li>Отгул</li>
				<li className='ml-20 flex items-center'>
					03 марта 2023{' '}
					<span className='text-red-500 px-[11px]'>
						<Icons.ArrowRight />
					</span>{' '}
					23 марта 2023
				</li>
				<li>20</li>
			</ul>
		</div>
	)
}

export default HistoryTable
