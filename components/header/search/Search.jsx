import { useState , useEffect } from 'react'
import { BiSearch, BiX, BiChevronRight } from 'react-icons/bi'
import Results from './Results'

const Search = ({ windowsToggle, setWindowsToggle }) => {
    const toggle = windowsToggle.search
    const [query, setQuery] = useState(null)
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        console.log(query);
    }, [query])

    return (
        <div className="relative z-20 flex">
            <button
                className={`z-20 text-[2rem] ${
                    toggle && 'rounded-tr-md rounded-bl-md bg-red-500'
                }`}
                onClick={() =>
                    setWindowsToggle((curr) => ({
                        authors: false,
                        categories: false,
                        search: !curr.search,
                    }))
                }
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
                } glassmorphism shadow-lg`}
            >
                <form
                    onSubmit={(e) => e.preventDefault()}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        
                    }}
                    className="mb-5 flex items-center border-b border-blue-400 pb-5"
                >
                    <BiChevronRight className="h-10 w-10" />
                    {toggle && (
                        <input
                            type="search"
                            className="dark:glassmorphism h-12 rounded-xl bg-gray-200  p-5 outline-none ring-blue-400 hover:bg-gray-300 focus:border-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-blue-400 focus:ring-4"
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
