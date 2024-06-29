'use client'

import DonutChart from './DonutChart'

const StatisticsBlockChart = ({ hoveredItem }) => {
	const data = {
		datasets: [
			{
				data: [85, 20, 45],
				backgroundColor: ['#25824f', '#DB4546', '#FFB649'],
				hoverBackgroundColor: ['#3BC177', '#E40002', '#FFFC00'],
				hoverOffset: 5,
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		cutout: '85%',
		'borderColor': 'transparent',
		hover: {
			mode: 'nearest',
			intersect: true,
		},
	}

	return (
		<div className='relative size-40'>
			<DonutChart data={data} options={options} />
			<div className='absolute inset-0 py-12 flex flex-col items-center justify-center pointer-events-none'>
				<span className='text-4xl text-white'>32</span>
				<span className='text-[14px] text-zinc-500'>дня</span>
			</div>
		</div>
	)
}

export default StatisticsBlockChart
