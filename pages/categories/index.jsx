import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getCategories'
import CategoryLinkButton from '../../components/CategoryLinkButton'

const index = () => {
    const [categories, setCategories] = useState([])
    const categoriesFetcher = async () => {
        setCategories(await getCategories())
    }
    useEffect(() => {
        categoriesFetcher()
    }, [])

    console.log(categories.map(({ slug }) => ({ params: { slug } })))
    return (
        <div className="container mx-auto mb-8 grid grid-cols-3 px-10 gap-6">
            {categories.map((category) => (
                <CategoryLinkButton category={category} path={`/categories/${category.slug}`} key={category.slug} />
            ))}
        </div>
    )
}

export default index

// export const getStaticProps = async () => {
//     const categories = (await getCategories()) || []
//     return {
//         props: { categories },
//     }
// }
