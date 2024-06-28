import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Личный кабинет сотрудника (Отпуск)',
	description: 'Тестовая работа для компании Aspirity',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
