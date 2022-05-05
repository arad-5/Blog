import { useState, useEffect } from 'react'
import { postSearch } from '../../../services'
import PostRowLink from '../../PostRowLink'

const Results = ({ query }) => {
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = async (query) => {
        setSearchResults(await postSearch(query))
    }

    useEffect(() => {
        typeof query === 'string' && handleSearch(query)
        setIsSearching(true)
    }, [query])

    useEffect(() => {
        setIsSearching(false)
        console.log()
    }, [searchResults])

    return (
        <div>
            {isSearching ? (
                <div>searching ....</div>
            ) : searchResults.posts?.length ? (
                searchResults.posts.map((post) => (
                    <PostRowLink post={post} key={post.slug} />
                ))
            ) : (
                searchResults.posts && <div>no result found</div>
            )}
        </div>
    )
}

export default Results
