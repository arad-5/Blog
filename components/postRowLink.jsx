import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

const PostRowLink = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <a>
                <div
                    key={post.title}
                    className="mb-3 flex w-full cursor-pointer items-center"
                >
                    <div className="relative h-16 w-28 rounded-md">
                        <Image
                            src={post.featuredImage.url}
                            alt={post.title}
                            layout="fill"
                        />
                    </div>
                    <div className="ml-4">
                        <p className="font-xs text-gray-500">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <h1 href={`/posts/${post.slug}`}>
                            {post.title.length > 60
                                ? post.title.slice(0, 60).concat('....')
                                : post.title}
                        </h1>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostRowLink
