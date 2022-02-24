import Post_paragraph from '../../components/post_detail_text/index'
import Profile from '../../components/profile'

const PostDetail = ({ post }) => {
    return (
        <div className="glassmorphism mb-8 rounded-lg pb-10 text-gray-500 shadow-lg lg:p-8">
            <div className="relative mb-6 overflow-hidden shadow-md ">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="h-full w-full rounded-lg border border-[#ffffff1a] object-top"
                />
            </div>
            <div className="px-4 lg:px-0 ">
                <div className="mb-8 flex w-full items-center">
                    <Profile author={post.author} />
                </div>
                <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                <div className="line-h-3 leading-7">
                    {post.content.raw.children.map((paraObj, index) => (
                        <div className="py-1" key={index}>
                            <Post_paragraph text={paraObj} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostDetail
