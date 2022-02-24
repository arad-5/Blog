import { getPosts, getPostDetail } from '../../services'
import {
    PostDetail,
    Category,
    PostWidgets,
    Comments,
    CommentsForm,
    Author,
} from '../../components/componentsExporter'
import Profile from '../../components/Profile'

const PostDetails = ({ post }) => {
    return (
        <div className="container mx-auto pb-8 px-2 md:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post} />
                    <div className="flex justify-center">
                        <Profile author={post.author} />
                    </div>
                    <CommentsForm slug={post.slug} />
                    <Comments commentsData={post.comment} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative top-8 lg:sticky">
                        <Category />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetail(params.slug)

    return {
        props: { post: data },
    }
}

export async function getStaticPaths() {
    const posts = await getPosts()

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false,
    }
}
