import React from 'react'

const StatisticsBlockChart = () => {
	return (
		<div className='relative w-32 h-32'>
			<svg viewBox='0 0 36 36' className='circular-chart'>
				<path
					className='circle-bg'
					d='M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831'
					fill='none'
					stroke='#eee'
					strokeWidth='2'
				/>
				<path
					className='circle'
					strokeDasharray='70, 30'
					d='M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831'
					fill='none'
					stroke='#4caf50'
					strokeWidth='2'
				/>
				<path
					className='circle'
					strokeDasharray='20, 80'
					d='M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831'
					fill='none'
					stroke='#ff9800'
					strokeWidth='2'
				/>
				<path
					className='circle'
					strokeDasharray='10, 90'
					d='M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831'
					fill='none'
					stroke='#f44336'
					strokeWidth='2'
				/>
			</svg>
			<div className='absolute inset-0 flex items-center justify-center'>
				<span className='text-4xl text-white'>32</span>
			</div>
		</div>
	)
}

export default StatisticsBlockChart
