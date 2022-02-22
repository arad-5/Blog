import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const postSearch = async (searchQuery) => {
    const query = gql`
    query MyQuery($searchQuery: String!) {
        posts(where: {_search: $searchQuery}) {
          slug
          title
          createdAt
          featuredImage {
            url
          }
        }
      }      
    `
    const result = await request(graphqlApi, query , {searchQuery} )
    return result
  }