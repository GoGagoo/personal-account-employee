import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement } from 'chart.js'

ChartJS.register(ArcElement)

const DonutChart = ({ data, options }) => {
	return (
		<div className='w-full max-w-md mx-auto'>
			<Doughnut data={data} options={options} />
		</div>
	)
}

export default DonutChart
