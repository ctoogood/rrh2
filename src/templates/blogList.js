import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/blog/post"


const BlogList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="uk-h1 uk-margin-medium-top uk-text-center ">Blog</h1>
      <section className="rrh_grid" style={{maxWidth:"1000px", margin:"auto"}}>
        {props.data.posts.edges.map(post => (
          <Post post={post} key={post.node.title} />
        ))}
        <section className="blog__nav">
          {!isFirst && (
            <Link className="blog__prev" to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className="blog__next" to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </section>
      </section>
    </Layout>
  )
}

export default BlogList

export const query = graphql`
  query BlogQuery($limit: Int!, $skip: Int!) {
    posts: allSanityPost(
      limit: $limit
      skip: $skip
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          categories {
            title
          }
          slug {
            current
          }
          title
          publishedAt(formatString: "DD/MM/YYYY")
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
