import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAuthorDetail = async (id) => {
    const query = gql`
        query MyQuery($id: ID!) {
            author(where: { id: $id }) {
                bio
                name
                photo {
                    url
                }
                createdAt
                post {
                    author {
                        bio
                        name
                        id
                        photo {
                            url
                        }
                    }
                    createdAt
                    slug
                    title
                    exerpt
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                    categories {
                        name
                        slug
                        image {
                            url
                        }
                    }
                }
            }
        }
    `
    return await request(graphqlApi, query, { id })
}
