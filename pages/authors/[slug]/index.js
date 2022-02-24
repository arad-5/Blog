import { getAuthorDetail } from '../../../services/getAuthorDetail'
import { getAuthors } from '../../../services/getAuthors'
import Profile from '../../../components/Profile'
import _categoriesPosted from './_categoriesPosted'
import _posts from './_posts'

const slug = ({ author }) => {
    const categories = author.post.map((post) => post.categories[0])

    const uniqueCategories = []
    for (let i = 0; i < categories.length; i++) {
        if (
            categories[i + 1] &&
            categories[i + 1].name !== categories[i].name
        ) {
            uniqueCategories.push(categories[i])
        } else if (!categories[i + 1]) {
            uniqueCategories.push(categories[i])
        }
    }

    return (
        <div className="container mx-auto mb-8 grid-cols-3 gap-10 px-10 text-xl text-slate-400 xl:grid">
            <div className="top-8 col-span-1 xl:h-44 mb-5 xl:sticky xl:mb-0 ">
                <Profile author={author} />
                <_categoriesPosted categories={uniqueCategories} />
            </div>
            <_posts posts={author.post} />
        </div>
    )
}

export default slug

export async function getStaticProps({ params }) {
    console.log(params.slug)
    const data = await getAuthorDetail(params.slug)
    return {
        props: data,
    }
}

export async function getStaticPaths() {
    const { authors } = await getAuthors()

    return {
        paths: authors.map((author) => ({ params: { slug: author.id } })),
        fallback: false,
    }
}