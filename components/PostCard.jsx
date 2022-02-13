import moment from 'moment'
import Link from 'next/link'
import { FcCalendar } from 'react-icons/fc'
function PostCard({ post }) {
  return (
    <div className="mb-8 overflow-hidden rounded-lg bg-white p-0 pb-12 shadow-lg">
      <div className="mb6 relative  pb-80 shadow-md ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute  h-full w-full object-cover shadow-lg"
        />
      </div>
      <div className="lg:px20 px-8">
        <h1 className="mt-5 mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-150 hover:text-pink-600  ">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="mb-8 block w-full items-center text-center lg:flex ">
          <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="40px"
              width="40px"
              className="rounded-full align-middle"
            />
            <p className="ml-2 align-middle text-lg text-gray-700 ">
              {post.author.name}
            </p>
            <div className="flex items-center font-medium text-gray-700">
              <FcCalendar />
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </div>
          </div>
        </div>
        <p className=" mb-8 text-lg font-normal text-gray-700 md:px-6">
          {post.exerpt}
        </p>
        <div>
          <Link href={`/posts/${post.slug}`}>
            <span className="cursor-pointer rounded-md bg-blue-500 px-4 py-3 font-medium text-white">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
