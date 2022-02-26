import { useState, useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../../services'
import PostRowLink from '../PostRowLink'

function PostWidgets({ categories, slug }) {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) =>
                setRelatedPosts(result)
            )
        } else {
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
    }, [slug , categories])

    return (
        <div className="mb-8 rounded-lg p-8 shadow-lg glassmorphism ">
            <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                {slug ? 'Realated posts' : 'Recent posts'}
            </h3>
            {relatedPosts.map((post) => (
                <PostRowLink post={post} key={post.slug}/>
            ))}
        </div>
    )
}

export default PostWidgets
