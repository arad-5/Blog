import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Progressbar = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = () => setLoading(true)
        const handleRouteComplete = () => setLoading('completed')
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteComplete)
        }
    }, [])

    return (
        <div
            className={`fixed top-0 z-40 h-[2px] bg-blue-500  ${
                loading && (loading === 'completed' ? 'progress-completed' : 'progress-loading')
            }`}
        ></div>
    )
}

export default Progressbar
