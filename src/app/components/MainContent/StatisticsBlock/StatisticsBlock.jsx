'use client'

import { useState } from 'react'
import { Icons } from '../../../icons/icons'
import StatisticsBlockChart from './StatisticsBlockChart'

const StatisticsBlock = () => {
	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<div className='max-w-[516px] md:max-w-[516px] lg:min-w-[516px] h-full md:h-[444px] mt-[16px]'>
			<div className='bg-zinc-800 p-7 rounded-xl'>
				<div className='flex items-center gap-2'>
					<div className='text-2xl mb-4'>Статистика</div>
					<button
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
					>
						<Icons.Info />
					</button>
					{showTooltip && (
						<div className='transition ease-in align-middle text-[14px] text-nowrap mb-3 py-1 px-[8px] bg-zinc-700 text-white rounded shadow-2xl'>
							1 раб. месяц = 3 дня отпуска
						</div>
					)}
				</div>
				<div className='flex items-center justify-center text-[34px]'>
					<StatisticsBlockChart />
				</div>
				<ul className='space-y-2 mt-4'>
					<li className='flex justify-between border rounded-xl transition border-zinc-700 hover:border-zinc-200 leading-10'>
						<div className='pl-2 text-[16px]'>
							<span className='text-green-500 pr-2'>•</span>Доступно сейчас
						</div>
						<span className='pr-2 text-[16px]'>32 дня</span>
					</li>
					<li className='flex justify-between border rounded-xl transition border-zinc-700 hover:border-zinc-200 leading-10'>
						<div className='pl-2 text-[16px]'>
							<span className='text-yellow-500 pr-2'>•</span>Запланировано
						</div>
						<span className='pr-2 text-[16px]'>8 дней</span>
					</li>
					<li className='flex justify-between border rounded-xl transition border-zinc-700 hover:border-zinc-200 leading-10'>
						<div className='pl-2 text-[16px]'>
							<span className='text-red-500 pr-2'>•</span>
							Использовано/недоступно
						</div>
						<span className='pr-2 text-[16px]'>4 дня</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default StatisticsBlock
