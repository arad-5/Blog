import { useState } from 'react'
import Header from './header/Header'
import Progressbar from './progressBar/Progressbar'

const Layout = ({ children }) => {
    const [isThemeDark, setIsThemeDark] = useState(true)
    return (
        <>
            <Progressbar />
            <div className={`${isThemeDark ? "dark text-slate-300 bg-[#0e0e0e]" : "bg-white text-slate-800"} min-h-[100vh]`}>
                <Header isThemeDark={isThemeDark} setIsThemeDark={setIsThemeDark}/>
                {children}
            </div>
        </>
    )
}

export default Layout
