import Head from 'next/head'
import { getCategories, getCategoryPosts } from '../../services'
import { PostCard } from '../../components/componentsExporter'

const CategoryPost = ({ Categories }) => {
    const { post } = Categories.category

    return (
        <div>
            <Head>
                <title>{Categories.category.name}</title>
            </Head>
            <div className="container mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-5 px-2 md:px-10">
                {post.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
    const Categories = await getCategoryPosts(params.slug)

    return {
        props: { Categories },
    }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories()
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: false,
    }
}
