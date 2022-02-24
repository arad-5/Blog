import CategoryLinkButton from '../../../components/CategoryLinkButton'

const _categoriesPosted = ({ categories }) => {
    // console.log(categories)
    return (
        <div className="glassmorphism col-span-2 p-4 mb-5 xl:mb-0">
            <span className="font-bold text-slate-200">
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

export default _categoriesPosted
