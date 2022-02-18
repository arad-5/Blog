import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getRecentPosts = async () => {
    const query = gql`
      query getPostsDetails() {
          posts (
              orderBy: createdAt_ASC
              last: 3
           ) {
          title
          featuredImage {
          url
          }
          createdAt
          slug
        }
      }
    `
    const result = await request(graphqlApi, query)
    return result.posts
}