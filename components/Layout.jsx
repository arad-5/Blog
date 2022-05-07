import { useState } from 'react'
import Header from './header/Header'
import Progressbar from './progressBar/Progressbar'

const Layout = ({ children }) => {
    return (
        <>
            <Progressbar />
            <Header />
            <div
                className="text-slate-800 selection:bg-white dark:bg-[#0e0e0e] dark:text-slate-300"
            >
                {children}
            </div>
        </>
    )
}

export default Layout
