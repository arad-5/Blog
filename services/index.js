import { request, gql } from 'graphql-request'

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
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
          }
        }
      }
    }
  `

  const result = await request(graphqlApi, query)
  return result.postsConnection.edges
}

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
  console.log(graphqlApi, query)
  const result = await request(graphqlApi, query)
  return result.posts
}

export const getSimilarPosts = async () => {
  const query = gql`
    query getPostsDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
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