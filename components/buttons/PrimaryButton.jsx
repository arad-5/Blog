import { useRouter } from 'next/router'

const PrimaryButton = ({ children, handleClick, path, additionalStyle }) => {
    const router = useRouter()
    const handleLink = (path) => {
        router.replace(path)
    }
    return (
        <button
            onClick={
                path
                    ? () => {
                          handleLink(path)
                          handleClick
                      }
                    : handleClick
            }
            className={`rounded-md bg-blue-500 px-3 py-2 font-medium text-white focus:ring-4 md:py-3 md:px-4 md:focus:ring-8 ${additionalStyle}`}
        >
            {children}
        </button>
    )
}

export default PrimaryButton
