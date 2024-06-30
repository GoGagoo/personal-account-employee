import HistoryTable from './HistoryTable'

const TruancyHistory = () => {
	return (
		<div className='w-full md:min-w-[962px] h-full md:min-h-[444px] mt-4'>
			<div className='bg-zinc-800 p-7 rounded-xl'>
				<div className='flex justify-between items-center'>
					<div className='font-poppins text-2xl'>История отпусков</div>
					<div className='font-poppins text-[14px] text-zinc-500 hover:text-zinc-200 transition cursor-pointer'>
						Посмотреть все
					</div>
				</div>

				<HistoryTable />
			</div>
		</div>
	)
}

export default TruancyHistory
