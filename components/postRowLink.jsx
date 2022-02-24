import Link from 'next/link'
import moment from 'moment'

const PostRowLink = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`} >
            <div key={post.title} className="mb-3 flex w-full items-center cursor-pointer">
                <div className="w-16 flex-none">
                    <img
                        src={post.featuredImage.url}
                        alt={post.title}
                        height="60px"
                        width="60px"
                        className="rounded-md"
                    />
                </div>
                <div className="ml-4 flex-grow">
                    <p className="font-xs text-gray-500">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <h1 href={`/posts/${post.slug}`}>{post.title}</h1>
                </div>
            </div>
        </Link>
    )
}

export default PostRowLink
