import { useState } from 'react'
import { BiCategory, BiX } from 'react-icons/bi'
import Category from '../Category'

const Categories = () => {
    const [toggleCategories, setToggleCategories] = useState(false)

    return (
        <div className="relative z-10 flex">
            <button
                className={`z-20 cursor-pointer text-[2rem] ${
                    toggleCategories && 'rounded-tr-md rounded-bl-md bg-red-500'
                }`}
                onClick={() => setToggleCategories((curr) => !curr)}
            >
                {toggleCategories ? (
                    <BiX className=" text-white" />
                ) : (
                    <BiCategory className=" text-blue-400" />
                )}
            </button>
            <div
                className={`absolute top-0 right-0 z-10 w-[60vw] max-w-md ${
                    toggleCategories ? 'window-opened' : 'window-closed'
                }`}
            >
                <Category />
            </div>
        </div>
    )
}

export default Categories
