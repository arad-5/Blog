import Image from 'next/image'
import { useRouter } from 'next/router'

const CategoryLinkButton = ({ category, path }) => {
    const router = useRouter()
    const handleLink = () => router.replace(path)
    return (
        <button
            className="m-2 flex h-[3.6rem] w-[10rem] cursor-pointer items-center rounded-2xl border border-[#ffffff1a] p-3 text-slate-700 dark:text-slate-300"
            onClick={() => handleLink()}
        >
            <div className="relative h-10 w-10 mr-3">
                <Image
                    unoptimized
                    layout="fill"
                    src={category.image.url}
                    alt={category.name}
                    className="object-contain"
                />
            </div>
            <h2 className="mr-4 font-medium">{category.name}</h2>
        </button>
    )
}

export default CategoryLinkButton
