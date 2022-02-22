import Header from './header/Header'
import Progressbar from './progressBar/Progressbar'

const Layout = ({ children }) => {

    return (
        <>
            <Progressbar />
            <Header />
            {children}
        </>
    )
}

export default Layout
