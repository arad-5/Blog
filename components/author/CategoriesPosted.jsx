import CategoryLinkButton from '../CategoryLinkButton'

const CategoriesPosted = ({ categories }) => {
    
    return (
        <div className="glassmorphism p-4 my-5 xl:mb-0">
            <span className="font-bold dark:text-slate-200">
                Categories posted at:
            </span>
            <div className="mt-7 flex flex-wrap">
                {categories.map((category) => (
                    <CategoryLinkButton
                        category={category}
                        path={`/categories/${category.slug}`}
                        key={category.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoriesPosted
