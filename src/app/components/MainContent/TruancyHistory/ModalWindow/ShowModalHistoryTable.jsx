'use client'

import { useEffect, useState } from 'react'
import useWindowSize from '../../../../hooks/useWindowSize'
import ModalHistoryTable from './ModalHistoryTable'
import SmallModalHistoryTable from './SmallModalHistoryTable'

const ShowModalHistoryTable = () => {
	const [openModal, setModal] = useState(false)
	const size = useWindowSize()
	const isSmallScreen = size.width > 649

	const handleModal = () => {
		setModal(!openModal)
	}

	const handleCloseModal = () => {
		setModal(false)
	}

	useEffect(() => {
		if (openModal) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [openModal])

	return (
		<>
			<button
				className='text-[14px] text-zinc-500 hover:text-zinc-200 outline-none'
				onClick={handleModal}
			>
				Посмотреть все
			</button>
			{openModal && (
				<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
					<div
						onClick={handleCloseModal}
						className='absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-90'
					></div>
					<div className='relative mx-auto my-8 p-4 rounded overflow-y-auto max-h-[90vh]'>
						{isSmallScreen ? (
							<ModalHistoryTable handleCloseModal={handleCloseModal} />
						) : (
							<SmallModalHistoryTable handleCloseModal={handleCloseModal} />
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default ShowModalHistoryTable
