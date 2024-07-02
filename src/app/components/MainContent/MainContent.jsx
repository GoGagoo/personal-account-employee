import StatisticsBlock from './StatisticsBlock/StatisticsBlock'
import TruancyHistory from './TruancyHistory/TruancyHistory'

const MainContent = () => {
	return (
		<div className='flex flex-col xl:flex-row mt-4 gap-x-4'>
			<StatisticsBlock />
			<TruancyHistory />
		</div>
	)
}

export default MainContent
