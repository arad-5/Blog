import { useState, useEffect } from 'react'
import { postSearch } from '../../../services'
import Link from "next/link"
import moment from 'moment'
const Results = ({ query }) => {
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async (query) => {
        setSearchResults(await postSearch(query))
    }

    useEffect(() => {
        typeof query === 'string' && handleSearch(query)
    }, [query])

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    return (
        <div>
            {searchResults.posts && searchResults.posts.map((post) => (
                <div key={post.title} className="flex w-full items-center mb-3">
                    <div className="w-16 flex-none">
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            height="60px"
                            width="60px"
                            className="rounded-md"
                        />
                    </div>
                    <div className="ml-4 flex-grow">
                        <p className="font-xs text-gray-500">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results
