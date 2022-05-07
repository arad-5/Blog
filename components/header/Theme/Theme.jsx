import { BsMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Theme = () => {
    const { setTheme, theme } = useTheme()
    return (
        <button
            className="relative h-[2rem] w-[2rem] overflow-hidden rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            <div
                className={`h-16 w-16 ${
                    theme === 'light' ? 'rotate-180' : 'rotate-0'
                } transition duration-200`}
            >
                <div className="h-[2rem] w-[2rem] rounded-full  bg-gradient-to-b from-orange-300 to-pink-500"></div>
                <BsMoonFill className="ml-auto rotate-[180deg] rounded-full text-[2rem]" />
            </div>
        </button>
    )
}

export default Theme
