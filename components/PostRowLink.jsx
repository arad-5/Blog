import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

const PostRowLink = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <a>
                <div
                    key={post.title}
                    className="mb-3 flex w-full cursor-pointer items-center "
                >
                    <div className="w-16 h-11 relative">
                        <Image
                            src={post.featuredImage.url}
                            alt={post.title}
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <div className="ml-4 w-2/3 overflow-auto h-20">
                        <p className="font-xs text-gray-500">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <h1 href={`/posts/${post.slug}`}>
                            {post.title}
                        </h1>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostRowLink
