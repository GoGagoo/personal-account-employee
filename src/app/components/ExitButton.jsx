import { Icons } from '../icons/icons'

const ExitButton = () => {
	return (
		<div className='flex items-center gap-2 mt-8 group'>
			<Icons.Chevron />
			<p className='uppercase font-bold cursor-pointer transition text-zinc-500 group-hover:text-zinc-100'>
				Вернуться к сотрудникам
			</p>
		</div>
	)
}

export default ExitButton
