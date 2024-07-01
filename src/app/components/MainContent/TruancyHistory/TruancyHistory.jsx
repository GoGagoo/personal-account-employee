import HistoryTable from './HistoryTable'
import ShowModalHistoryTable from './ModalWindow/ShowModalHistoryTable'

const TruancyHistory = () => {
	return (
		<div className='w-full md:w-full h-full md:h-[444px] mt-4'>
			<div className='bg-zinc-800 p-7 rounded-xl'>
				<div className='flex justify-between items-center'>
					<div className='text-2xl'>История отпусков</div>
					<ShowModalHistoryTable />
				</div>

				<HistoryTable />
			</div>
		</div>
	)
}

export default TruancyHistory
