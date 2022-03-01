import { useEffect, useState } from 'react'
import { getAuthors } from '../../services/getAuthors'
import { FaKeyboard } from 'react-icons/fa'
import { BiX } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'

const Authors = ({ windowsToggle, setWindowsToggle }) => {
    const toggle = windowsToggle.authors
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const authors = ({ authors } = await getAuthors())
            setAuthors(authors)
        }
        fetch()
    }, [])

    return (
        <div className={`${toggle ? 'z-50' : "z-[5]"} flex border sm:relative`}>
            <button
                className={`z-20 cursor-pointer text-[2rem] ${
                    toggle &&
                    'absolute top-[1.5rem] -right-6  rounded-tr-md rounded-bl-md bg-red-500 sm:static'
                }`}
                onClick={() => {
                    setWindowsToggle((curr) =>
                        setWindowsToggle({
                            authors: !curr.authors,
                            categories: false,
                            search: false,
                        })
                    )
                }}
            >
                {toggle ? (
                    <BiX className=" text-white" />
                ) : (
                    <FaKeyboard className=" text-blue-400" />
                )}
            </button>

            <div
                className={`absolute top-[1.5rem] -right-6 z-10 w-[90vw] max-w-sm p-8 sm:top-0 sm:right-0 ${
                    toggle ? 'window-opened' : 'window-closed'
                } glassmorphism w-96 rounded-lg  shadow-lg`}
            >
                <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                    Authors
                </h3>
                {authors.map((author) => (
                    <Link href={`/authors/${author.id}`} key={author.id}>
                        <a>
                            <div className="flex cursor-pointer items-center">
                                <Image
                                    unoptimized
                                    width="60px"
                                    height="60px"
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
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Authors
