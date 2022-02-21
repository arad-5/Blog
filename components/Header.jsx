import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])
    // console.log(useRouter())

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="container mx-auto mb-8 px-10">
            <div className=" flex w-full items-center justify-between border-b border-blue-400 py-8">
                <div className="md:float-left">
                    <Link href="/">
                        <span className="cursor-pointer text-3xl font-bold text-white">
                            Arad Blog
                        </span>
                    </Link>
                </div>
                <div className="float-right hidden space-x-10 md:flex">
                    {!(useRouter().pathname === '/categories' || useRouter().pathname === '/categories/[slug]') &&
                        categories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/categories/${category.slug}`}
                            >
                                <span className="ml-1 flex cursor-pointer items-center  text-lg font-semibold text-white ">
                                    <img
                                        className="mr-2 h-[40px] rounded-md"
                                        src={category.image.url}
                                        alt={category.name}
                                    />
                                    {category.name}
                                </span>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Header
