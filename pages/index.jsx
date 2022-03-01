import Head from 'next/head'
import {
    PostCard,
    Category,
    PostWidgets,
} from '../components/componentsExporter'

import { getPosts } from '../services'

const Home = ({ posts }) => {
    return (
        <div className="mx-auto px-4 pb-8 md:px-8 lg:container">
            <Head>
                <title>Arad Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            </Head>
            <div className="md:grid gap-7 grid-cols-2">
                <div className="col-span-1">
                    {posts.map((post) => (
                        <PostCard key={post.node.slug} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1">
                    <div className="relative top-8 md:sticky">
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
