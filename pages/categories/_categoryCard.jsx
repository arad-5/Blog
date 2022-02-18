import { useRouter } from "next/router"
const CategoryCard = ({ category }) => {
    const router = useRouter()
    const handleLink = () => router.push(`categories/${category.slug}`);
    return (
        <button className="relative mx-2 flex h-[4rem] w-[10rem] items-center justify-center p-3 cursor-pointer" onClick={() => handleLink()}>
            <img
                src={category.image.url}
                alt={category.name}
                className="h-[80%] object-contain inline mr-2"
            />
            <h2 className="text-white">{category.name}</h2>
        </button>
    )
}

export default CategoryCard
