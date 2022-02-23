import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAuthors = async () => {
    const query = gql`
        query MyQuery {
            authors {
                id
                name
                photo {
                    url
                }
                bio
            }
        }
    `
    return await request(graphqlApi, query)
}
