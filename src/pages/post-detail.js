import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostDetail = props => {
  const post = props.data.microcmsArticles
  return (
    <Layout>
      <div>
        <h2>{post.title}</h2>
        <img src={post.image.url} alt="News投稿のイメージ画像" />
      </div>
    </Layout>
  )
}

export default PostDetail

export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      id
      createdAt(formatString: "YYYY年M月D日")
      image {
        url
      }
      title
      sale_link
      posts {
        amazon_url
        id
        image {
          url
        }
        price
        review_count
        review_point
        title
      }
    }
  }
`
