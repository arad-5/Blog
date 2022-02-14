import { request, gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export { getPosts } from './posts/getPosts'
export { getPostDetail } from './posts/getPostDetail'
export { getRecentPosts } from './posts/getRecentPosts'
export { getSimilarPosts } from './posts/getSimilarPosts'
export { getCategories } from './getCategories'
export { submitComment } from './submitComment'