import { useEffect, useState } from 'react'
import { getAuthors } from '../../services/getAuthors'
import { FaKeyboard } from 'react-icons/fa'
import { BiX } from 'react-icons/bi'
import Link from 'next/link'
const Authors = () => {
    const [authors, setAuthors] = useState([])
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const fetch = async () => {
            setAuthors(({ authors } = await getAuthors()))
        }
        fetch()
    }, [])
    console.log()
    return (
        <div className="relative z-[5] flex">
            <button
                className={`z-20 cursor-pointer text-[2rem] ${
                    toggle && 'rounded-tr-md rounded-bl-md bg-red-500'
                }`}
                onClick={() => setToggle((curr) => !curr)}
            >
                {toggle ? (
                    <BiX className=" text-white" />
                ) : (
                    <FaKeyboard className=" text-blue-400" />
                )}
            </button>

            <div
                className={`absolute top-0 right-0 z-10 w-[60vw] max-w-sm p-8 ${
                    toggle ? 'window-opened' : 'window-closed'
                } w-96 rounded-lg bg-white shadow-lg`}
            >
                <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                    Authors
                </h3>
                {authors.map((author) => (
                    <Link href={`/authors/${author.id}`} key={author.id}>
                        <div className="flex cursor-pointer items-center">
                            <img
                                src={author.photo.url}
                                className="h-[3.5rem] w-[3.5rem]  rounded-full"
                                alt={author.name}
                            />
                            <div className="ml-5">
                                <h2>{author.name}</h2>
                                {author.bio.length > 30 ? (
                                    <p>
                                        {author.bio.slice(0, 30)}{' '}
                                        <span>...</span>
                                    </p>
                                ) : (
                                    <p>{author.bio}</p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Authors
