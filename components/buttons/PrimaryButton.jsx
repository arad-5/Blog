import { useRouter } from 'next/router'

const PrimaryButton = ({ children, handleClick, path, additionalStyle }) => {
    const router = useRouter()
    const handleLink = (path) => {
        router.replace(path)
    }
    return (
        <button
            onClick={path ? () => {
                handleLink(path)
                handleClick
            } : handleClick}
            className={`rounded-md bg-blue-500 px-4 py-3 font-medium text-white ${additionalStyle}`}
        >
            {children}
        </button>
    )
}

export default PrimaryButton
