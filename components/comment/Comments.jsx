import { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = ({ commentsData }) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        setComments(commentsData)
    }, [])

    return (
        <>
            {comments.length > 0 && (
                <div className="glassmorphism  dark:text-slate-300 rounded-lg p-8 pb-8 shadow-lg">
                    <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                        {comments.length} comments
                    </h3>
                    {comments.map((comment) => (
                        <div
                            key={comment.createdAt}
                            className="mb-4 border-b border-gray-100 pb-4"
                        >
                            <p className="mb-4">
                                <span className="font-semibold">
                                    {comment.name}
                                </span>{' '}
                                on{' '}
                                {moment(comment.createdAt).format(
                                    'MMM DD, YYYY'
                                )}
                            </p>
                            <p className="w-full whitespace-pre-line">
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments
