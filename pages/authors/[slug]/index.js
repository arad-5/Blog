import { getAuthorDetail } from '../../../services/getAuthorDetail'
import { getAuthors } from '../../../services/getAuthors'
import _profile from './_profile'
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
        <div className="container mx-auto mb-8 grid grid-cols-3 gap-10 px-10 text-xl text-slate-400">
            <div className="col-span-1">
                <_profile author={author} />
            </div>
            <_categoriesPosted categories={uniqueCategories} />
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
