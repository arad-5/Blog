import { FcCalendar } from 'react-icons/fc'
import moment from 'moment'
import Post_paragraph from '../components/post_detail_text/index'
const PostDetail = ({ post }) => {
  return (
    <div className="glassmorphism mb-8 rounded-lg bg-white pb-10 shadow-lg lg:p-8 text-gray-400">
      <div className="relative mb-6 overflow-hidden shadow-md ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-lg object-top border border-[#ffffff1a]"
        />
      </div>
      <div className="px-4 lg:px-0 ">
        <div className="mb-8 flex w-full items-center">
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
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <div className="line-h-3 leading-7">
          {post.content.raw.children.map((paraObj, index) => (
            <div className="py-1" key={index}>
              <Post_paragraph  text={paraObj} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostDetail
