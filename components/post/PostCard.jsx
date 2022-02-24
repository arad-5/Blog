import moment from 'moment'
import Link from 'next/link'
import { FcCalendar } from 'react-icons/fc'
import PrimaryButton from '../buttons/PrimaryButton'

function PostCard({ post }) {
    return (
        <div className="glassmorphism  mb-8 rounded-lg p-0 pb-12 shadow-lg">
            <div className="mb6 relative  pb-80 shadow-md ">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="absolute  h-full w-full rounded-t-md object-cover shadow-lg"
                />
            </div>
            <div className="lg:px20 px-8">
                <h1 className="mt-5 mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-150 hover:text-pink-600">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h1>
                <div className="mb-8 flex w-full items-center">
                    <img
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height="40px"
                        width="40px"
                        className="rounded-full align-middle"
                    />
                    <div className="ml-5">
                        <h1 className="text-lg text-slate-200">
                            {post.author.name}
                        </h1>
                        <div className="flex items-center text-slate-400">
                            <FcCalendar className="mr-2" />
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </div>
                    </div>
                </div>
                <p className=" mb-8 text-lg font-normal text-slate-400 md:px-6">
                    {post.exerpt}
                </p>
                <PrimaryButton path={`/posts/${post.slug}`}>
                    Read More
                </PrimaryButton>
            </div>
        </div>
    )
}

export default PostCard
