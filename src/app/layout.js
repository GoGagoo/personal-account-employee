/* eslint-disable @next/next/no-sync-scripts */
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: "400" })


export const metadata = {
	title: 'Личный кабинет сотрудника (Отпуск)',
	description: 'Тестовая работа для компании Aspirity',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={poppins.className}>
			{children}
			<script src="path/to/chartjs/dist/chart.umd.js"></script>
			</body>
		</html>
	)
}
