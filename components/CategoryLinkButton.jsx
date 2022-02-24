import { useRouter } from 'next/router'

const CategoryLinkButton = ({ category, path }) => {
    const router = useRouter()
    const handleLink = () => router.replace(path)
    return (
        <button
            className="relative m-2 flex h-[3.6rem] w-[10rem] cursor-pointer items-center rounded-2xl bg-white p-3 text-slate-700 dark:Neumorphism"
            onClick={() => handleLink()}
        >
            <img
                src={category.image.url}
                alt={category.name}
                className="mr-2 inline h-[80%] object-contain"
            />
            <h2 className="font-medium">{category.name}</h2>
        </button>
    )
}

export default CategoryLinkButton
