import Head from 'next/head'
import {
    PostCard,
    Category,
    PostWidgets,
} from '../components/componentsExporter'

import { getPosts } from '../services'

export default function Home({ posts }) {
    return (
        <div className="mx-auto pb-8 px-4 md:px-8">
            <Head>
                <title>Arad Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                <div className="col-span-1 lg:col-span-6 ">
                    {posts.map((post) => (
                        <PostCard key={post.node.slug} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-6">
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
