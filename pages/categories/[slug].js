import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getCategories, getCategoryPosts } from '../../services'
import { PostCard } from '../../components/componentsExporter'
const CategoryPost = ({ Categories }) => {
    const router = useRouter()
    const { post } = Categories.category
    console.log(post)
    return (
        <div>
            <Head>
                <title>{Categories.category.name}</title>
            </Head>
            <div className="container mx-auto mb-8 px-2 md:px-10 grid grid-cols-2 gap-5">
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
        fallback: true,
    }
}
