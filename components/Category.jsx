import { useState, useEffect } from 'react'
import { getCategories } from '../services'
import PrimaryButton from '../components/buttons/PrimaryButton'
import CategoryLinkButton from './CategoryLinkButton'

function Category() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="glassmorphism mb-8 rounded-lg p-8 shadow-lg">
            <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                Categories
            </h3>
            <div className="flex flex-wrap">
                {categories.map((category) => (
                    <CategoryLinkButton
                        category={category}
                        key={category.slug}
                        path={`/categories/${category.slug}`}
                    />
                ))}
            </div>
            <PrimaryButton path="/categories" additionalStyle="mt-3">
                All categories
            </PrimaryButton>
        </div>
    )
}

export default Category
