import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { FcCalendar } from 'react-icons/fc'
import PrimaryButton from '../buttons/PrimaryButton'

function PostCard({ post }) {
    return (
        <div className="glassmorphism mb-8 rounded-lg p-0 shadow-lg">
            <Image
                layout="responsive"
                src={post.featuredImage.url}
                alt={post.title}
                height={9}
                width={16}
                className="absolute rounded-lg object-cover shadow-lg"
            />
            <div className=" px-8">
                <h1 className="sm:mt-5 mt-2 mb-5 cursor-pointer text-center text-xl font-semibold transition duration-150 hover:text-pink-600 lg:mb-8 lg:text-3xl">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h1>
                <div className="mb-5 flex w-full items-center lg:mb-8">
                    <Image
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <div className="ml-5">
                        <h2 className="text-lg text-slate-200">
                            {post.author.name}
                        </h2>
                        <div className="flex items-center text-slate-400">
                            <FcCalendar className="mr-2" />
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </div>
                    </div>
                </div>
                <p className="mb-5 text-slate-400 lg:mb-8 lg:px-6 lg:text-xl">
                    {post.exerpt.length > 150
                        ? post.exerpt.slice(0, 150) + '...'
                        : post.exerpt}
                </p>
                <PrimaryButton
                    path={`/posts/${post.slug}`}
                    additionalStyle="mb-5"
                >
                    Read More
                </PrimaryButton>
            </div>
        </div>
    )
}

export default PostCard
