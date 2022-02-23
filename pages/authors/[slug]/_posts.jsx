import PostCard from '../../../components/post/PostCard'

const _posts = ({posts}) => {
    return <div className="col-span-2 col-start-2">
        {posts.map(post => <PostCard post={post} key={post.slug}/>)}
    </div>
}

export default _posts
