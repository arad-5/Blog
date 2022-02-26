import { BsMoonFill } from 'react-icons/bs'
const Theme = ({ setIsThemeDark, isThemeDark }) => {
    return (
        <button
            className="relative h-[2rem] w-[2rem] overflow-hidden rounded-full"
            onClick={() => setIsThemeDark((curr) => !curr)}
        >
            <div
                className={`h-16 w-16 ${
                    isThemeDark ? "rotate-180" : "rotate-0"
                } transition duration-200`}
            >
                <div
                    className="h-[2rem] w-[2rem] rounded-full  bg-gradient-to-b from-orange-300 to-pink-500"
                ></div>
                <BsMoonFill
                    className="text-[2rem] rounded-full rotate-[180deg] ml-auto"
                />
            </div>
        </button>
    )
}

export default Theme
