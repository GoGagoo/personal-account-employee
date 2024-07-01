'use client'

import { useState } from 'react'
import ModalHistoryTable from './ModalHistoryTable'

const ShowModalHistoryTable = () => {
	const [openModal, setModal] = useState(false)
	const [open, setOpen] = useState(true)

	const handleModal = () => {
		setModal(!openModal)
	}

	const handleCloseModal = () => {
		setModal(false)
	}

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
					<div onClick={handleCloseModal} className='absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-90'></div>
					<div className='relative'>
						<ModalHistoryTable handleCloseModal={handleCloseModal} />
					</div>
				</div>
			)}
		</>
	)
}

export default ShowModalHistoryTable
