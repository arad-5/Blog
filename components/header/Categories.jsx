import { BiCategory, BiX } from 'react-icons/bi'
import Category from '../Category'

const Categories = ({ windowsToggle, setWindowsToggle }) => {
    const toggle = windowsToggle.categories

    return (
        <div className="relative z-10 flex">
            <button
                className={`z-20 cursor-pointer text-[2rem] ${
                    toggle && 'rounded-tr-md rounded-bl-md bg-red-500'
                }`}
                onClick={() =>
                    setWindowsToggle((curr) =>
                        setWindowsToggle({
                            authors: false,
                            categories: !curr.categories,
                            search: false,
                        })
                    )
                }
            >
                {toggle ? (
                    <BiX className=" text-white" />
                ) : (
                    <BiCategory className=" text-blue-400" />
                )}
            </button>
            <div
                className={`absolute top-0 right-0 z-10 w-[60vw] max-w-md ${
                    toggle ? 'window-opened' : 'window-closed'
                }`}
            >
                <Category />
            </div>
        </div>
    )
}

export default Categories
