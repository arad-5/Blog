import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getCategories'
import CategoryLinkButton from '../../components/CategoryLinkButton'

const Index = () => {
    const [categories, setCategories] = useState([])
    const categoriesFetcher = async () => {
        setCategories(await getCategories())
    }
    useEffect(() => {
        categoriesFetcher()
    }, [])

    return (
        <div className="container mx-auto mb-8 flex flex-wrap px-2 md:px-10">
            {categories.map((category) => (
                <CategoryLinkButton category={category} path={`/categories/${category.slug}`} key={category.slug} />
            ))}
        </div>
    )
}

export default Index
