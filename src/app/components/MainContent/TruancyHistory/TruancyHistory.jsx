'use client'

import useWindowSize from '../../../hooks/useWindowSize'
import SmallHistoryTable from './SmallHistoryTable'
import HistoryTable from './HistoryTable'
import ShowModalHistoryTable from './ModalWindow/ShowModalHistoryTable'

const TruancyHistory = () => {
	const size = useWindowSize()
	const isSmallScreen = size.width > 649

	return (
		<div className='w-full md:w-full h-full md:h-[444px] mt-4 md:mt-0 lg:mt-0'>
			<div className='bg-zinc-800 sm:p-7 rounded-xl'>
				<div className='flex justify-between px-4 sm:px-0 pt-[30px] sm:pt-0 items-center'>
					<div className='sm:text-2xl'>История отпусков</div>
					<ShowModalHistoryTable />
				</div>
				{isSmallScreen ? (
        <HistoryTable />
      ) : (
        <SmallHistoryTable />
      )}
			</div>
		</div>
	)
}

export default TruancyHistory
