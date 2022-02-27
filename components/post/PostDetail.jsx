import Post_paragraph from '../../components/post_detail_text/index'
import Profile from '../../components/Profile'
import Image from 'next/image'

const PostDetail = ({ post }) => {
    return (
        <div className="glassmorphism mb-8 rounded-lg pb-10 text-gray-500 shadow-lg lg:p-8">
            <Image
                layout="responsive"
                height={270}
                width={480}
                src={post.featuredImage.url}
                alt={post.title}
                className="rounded-lg border border-[#ffffff1a] object-cover shadow-lg"
            />

            <div className="px-4 mt-6">
                <div className="mb-8 flex w-full items-center">
                    <Profile author={post.author} />
                </div>
                <h1 className="mb-8 text-3xl font-semibold dark:text-slate-200">
                    {post.title}
                </h1>
                <div className="line-h-3 leading-7">
                    {post.content.raw.children.map((paraObj, index) => (
                        <div className="py-1 text-xl" key={index}>
                            <Post_paragraph text={paraObj} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostDetail
