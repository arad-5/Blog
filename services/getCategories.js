import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getCategories = async () => {
    const query = gql`
      query GetCategories {
        categories {
          name
          slug
        }
      }
    `
  
    const result = await request(graphqlApi, query)
    return result.categories
  }