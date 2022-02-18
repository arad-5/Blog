import { useEffect } from 'react'
import { getCategories } from '../../services/getCategories'


const index = ({ categories }) => {

console.log(categories.map(({slug}) => ({params: {slug}})));
    return <div>
      asdf
    </div>
}

export default index

export const getStaticProps = async () => {
    const categories = (await getCategories()) || []
    return {
        props: { categories },
    }
}
