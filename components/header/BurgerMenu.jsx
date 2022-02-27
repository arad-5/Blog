import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { BiX } from 'react-icons/bi'
import Categories from './Categories'
import Search from './search/Search'
import Authors from './Authors'
import Theme from './Theme/Theme'
import { useRouter } from 'next/router'

const BurgerMenu = ({
    windowsToggle,
    setWindowsToggle,
    isThemeDark,
    setIsThemeDark,
}) => {
    const toggle = windowsToggle.burger

    return (
        <div className="relative my-auto">
            <button
                className={`z-20 cursor-pointer text-[2rem] ${
                    toggle && 'rounded-tr-md rounded-bl-md bg-red-500'
                } text-slate-100`}
                onClick={() => {
                    setWindowsToggle((curr) =>
                        setWindowsToggle({
                            authors: false,
                            categories: false,
                            search: false,
                            burger: !curr.burger,
                        })
                    )
                }}
            >
                {toggle ? (
                    <BiX className="text-white" />
                ) : (
                    <HiOutlineMenuAlt4 />
                )}
            </button>
            <div
                className={`absolute top-10 right-0 w-[9rem] p-8 ${
                    toggle ? 'window-opened' : 'window-closed'
                } glassmorphism z-30 w-96  rounded-lg shadow-lg`}
            >
                <Theme
                    setIsThemeDark={setIsThemeDark}
                    isThemeDark={isThemeDark}
                />
                <Authors
                    windowsToggle={windowsToggle}
                    setWindowsToggle={setWindowsToggle}
                />
                {!(useRouter().pathname === '/categories') && (
                    <Categories
                        windowsToggle={windowsToggle}
                        setWindowsToggle={setWindowsToggle}
                    />
                )}
                <Search
                    windowsToggle={windowsToggle}
                    setWindowsToggle={setWindowsToggle}
                />
            </div>
        </div>
    )
}

export default BurgerMenu
