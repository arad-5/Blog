import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    return (
        <div className="container mx-auto mb-8 px-10">
            <div className=" flex w-full items-center justify-between border-b border-blue-400 py-8">
                <div className="md:float-left">
                    <Link href="/">
                        <span className="cursor-pointer text-4xl font-bold text-white">
                            Arad Blog
                        </span>
                    </Link>
                </div>
                <div className="float-right hidden md:flex space-x-10">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={`/categories/${category.slug}`}
                        >
                            <span className="ml-1 cursor-pointer font-semibold text-white  flex items-center text-xl ">
                                <img
                                  className="h-[50px] mr-2 rounded-md"
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
