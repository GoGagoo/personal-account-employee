import { Icons } from '../icons/icons'

const ExitButton = () => {
  return (
    <button className='flex items-center ml-2 gap-2 mt-[37px] sm:mt-8 group'>
      <Icons.Chevron />
      <div>

      </div>
      <p className='uppercase mt-1 font-semibold transition text-zinc-500 group-hover:text-zinc-100'>
        Вернуться к сотрудникам
      </p>
    </button>
  )
}

export default ExitButton
