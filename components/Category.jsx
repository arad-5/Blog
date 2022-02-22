import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import PrimaryButton from '../components/buttons/PrimaryButton'
function Category() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/categories/${category.slug}`}>
                    <span className=" block cursor-pointer pb-6">
                        {category.name}
                    </span>
                </Link>
            ))}
            <PrimaryButton path="/categories" additionalStyle="mt-3">All categories</PrimaryButton>
        </div>
    )
}

export default Category
