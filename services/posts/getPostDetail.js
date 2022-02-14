import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPostDetail = async (slug) => {
    const query = gql`
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
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
          content {
            raw
          }
          comment {
            name
            createdAt
            comment
          }
        }
      }
    `
  
    const result = await request(graphqlApi, query, { slug })
    return result.post
  }