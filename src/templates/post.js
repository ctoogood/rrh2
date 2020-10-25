import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data: { post }, errors }) => {
  const image = post.mainImage.asset.fluid

  const serializers = {
    types: {
      block(props) {
        switch (props.node.style) {
          case "h1":
            return <h1>{props.children}</h1>
          case "h2":
            return <h2>{props.children}</h2>
          case "h3":
            return <h3>{props.children}</h3>
          case "h4":
            return <h4>{props.children}</h4>
          case "h5":
            return <h5>{props.children}</h5>
          case "h6":
            return <h6>{props.children}</h6>
          case "blockquote":
            return <blockquote>{props.children}</blockquote>
          default:
            return <p className="postDetail__body">{props.children}</p>
        }
      },
    },
    marks: {
      link: ({ children, mark }) => <a href={mark.href}>{children}</a>,
    },
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        image={post.mainImage.asset.url}
        description={post.excerpt}
        keywords={[post.keywords.map(k => `${k}`)]}
      />
      <div className="uk-text-center uk-margin-auto" style={{maxWidth:"800px"}}>
      <ul className="uk-breadcrumb" aria-label="breadcrumb">
        <li><Link className="uk-text-primary" to="/blog">Blog</Link></li>
        <li><p className="uk-display-inline">{post.title}</p></li>
      </ul>

        <section className="uk-margin-medium-top">
          <h1>{post.title}</h1>
          <p className="postDetail__metadata">{post.publishedAt}</p>

          {/* <p className="postDetail__metadata">{post.categories[0].title}</p> */}
          <hr />
          <Img fluid={image} className="postDetail__image" />

          <BlockContent
            className="postDetail__body"
            blocks={post._rawBody}
            serializers={serializers}
            imageOptions={{ w: 1200, fit: "max" }}
            projectId="mk4ip66s"
            dataset="production"
          />
        </section>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      keywords
      excerpt
      categories {
        title
      }
      _rawBody
      publishedAt(formatString: "DD/MM/YYYY")
      mainImage {
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
