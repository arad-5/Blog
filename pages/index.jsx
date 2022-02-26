import Head from 'next/head'
import {
    PostCard,
    Category,
    PostWidgets,
} from '../components/componentsExporter'

import { getPosts } from '../services'

const Home = ({ posts }) => {
    return (
        <div className="mx-auto px-4 pb-8 md:px-8">
            <Head>
                <title>Arad Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
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

export default Home

export async function getStaticProps() {
    const posts = (await getPosts()) || []

    return {
        props: { posts },
    }
}
