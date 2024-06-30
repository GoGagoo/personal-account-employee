import StatisticsBlock from './StatisticsBlock/StatisticsBlock'
import TruancyHistory from './TruancyHistory/TruancyHistory'

const MainContent = () => {
	return (
		<div className='flex flex-col xl:flex-row gap-4'>
			<StatisticsBlock />
			<TruancyHistory />
		</div>
	)
}

export default MainContent
