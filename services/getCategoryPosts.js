import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getCategoryPosts = async (slug) => {
    const query = gql`
      query MyQuery($slug: String!) {
        category(where: {slug: $slug}) {
          name
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
          }
        }
      }
    `
      
    const result = await request(graphqlApi, query , {slug})
    return result
  }