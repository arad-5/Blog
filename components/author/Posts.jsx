import PostCard from '../post/PostCard'

const Posts = ({posts}) => {
    return <div className="col-span-2 col-start-2">
        {posts.map(post => <PostCard post={post} key={post.slug}/>)}
    </div>
}

export default Posts
