import Head from 'next/head'
import {
    PostCard,
    Category,
    PostWidgets,
} from '../components/componentsExporter'

import { getPosts } from '../services'

export default function Home({ posts }) {
    return (
        <div className="container mx-auto mb-8 px-10 ">
            <Head>
                <title>Arad Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-6 ">
                    {posts.map((post) => (
                        <PostCard key={post.node.slug} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-6 lg:px-10">
                    <div className="relative top-8 lg:sticky">
                        <PostWidgets />
                        <Category />
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || []

    return {
        props: { posts },
    }
}
