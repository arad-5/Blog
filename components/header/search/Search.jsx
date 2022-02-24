import { useState } from 'react'
import { BiSearch, BiX , BiChevronRight} from 'react-icons/bi'
import Results from './Results'

const Search = () => {
    const [toggle, setToggle] = useState(false)
    const [query, setQuery] = useState(null)

    return (
        <div className="relative z-20 flex">
            <button
                className={`z-20 text-[2rem] ${
                    toggle && 'rounded-tr-md rounded-bl-md bg-red-500'
                }`}
                onClick={() => setToggle((curr) => !curr)}
            >
                {toggle ? (
                    <BiX className=" text-white" />
                ) : (
                    <BiSearch className="text-blue-400" />
                )}
            </button>
            <div
                className={`absolute top-0 right-0 z-10 w-[80vw] max-w-lg rounded-lg border  p-3 ${
                    toggle ? 'window-opened' : 'window-closed'
                } shadow-lg glassmorphism`}
            >
                <form
                    onSubmit={(e) => e.preventDefault()}
                    onChange={(e) => setQuery(e.target.value)}
                    className="mb-5 flex items-center border-b border-blue-400 pb-5"
                >
                    <div className="mr-3 h-8 w-8 animate-spin">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            clipRule="evenodd"
                            viewBox="0 0 64 64"
                        >
                            <path
                                fill="none"
                                d="M-1024 -64H256V736H-1024z"
                            ></path>
                            <g>
                                <g>
                                    <path
                                        fill="#d9d9d9"
                                        d="M46.03 32a4.987 4.987 0 014.985-4.985A4.988 4.988 0 0156 32a4.988 4.988 0 01-4.985 4.985A4.987 4.987 0 0146.03 32z"
                                    ></path>
                                    <path
                                        fill="#b3b3b3"
                                        d="M41.92 41.92a4.99 4.99 0 017.051 0 4.99 4.99 0 010 7.051 4.99 4.99 0 01-7.051 0 4.99 4.99 0 010-7.051z"
                                    ></path>
                                    <circle
                                        cx="32"
                                        cy="51.015"
                                        r="4.985"
                                        fill="#8c8c8c"
                                    ></circle>
                                    <path
                                        fill="#666"
                                        d="M22.08 41.92a4.99 4.99 0 010 7.051 4.99 4.99 0 01-7.051 0 4.99 4.99 0 010-7.051 4.99 4.99 0 017.051 0z"
                                    ></path>
                                    <path
                                        fill="#404040"
                                        d="M17.97 32a4.987 4.987 0 01-4.985 4.985A4.988 4.988 0 018 32a4.988 4.988 0 014.985-4.985A4.987 4.987 0 0117.97 32zM22.08 22.08a4.99 4.99 0 01-7.051 0 4.99 4.99 0 010-7.051 4.99 4.99 0 017.051 0 4.99 4.99 0 010 7.051z"
                                    ></path>
                                    <circle
                                        cx="32"
                                        cy="12.985"
                                        r="4.985"
                                    ></circle>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {toggle && (
                        <input
                            type="search"
                            className="h-12 rounded-xl bg-gray-200 p-5  hover:bg-gray-300 focus:border-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-blue-400 ring-blue-400 focus:ring-4 dark:glassmorphism outline-none"
                            placeholder="search"
                            autoFocus
                            pattern="^[a-zA-Z*|0-9*|\s*]{0,}"
                        />
                    )}
                </form>
                <Results query={query} />
            </div>
        </div>
    )
}

export default Search
