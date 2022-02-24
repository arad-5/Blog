import { useState, useEffect } from 'react'
import { postSearch } from '../../../services'
import PostRowLink from '../../PostRowLink'

const Results = ({ query }) => {
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async (query) => {
        setSearchResults(await postSearch(query))
    }

    useEffect(() => {
        typeof query === 'string' && handleSearch(query)
    }, [query])

    return (
        <div>
            {searchResults.posts &&
                searchResults.posts.map((post) => (
                    <PostRowLink post={post} key={post.slug} />
                ))}
        </div>
    )
}

export default Results
