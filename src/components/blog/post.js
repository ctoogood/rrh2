import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


const Post = ({ post }) => {
  const image = post.node.mainImage.asset.fluid
  return (
    <section className="uk-box-shadow-hover-large uk-card uk-card-default uk-text-center uk-padding-remove">
        <Link to={`/blog/${post.node.slug.current}`} >
            <div className="uk-card-media-top">
            <Img fluid={image} style={{maxHeight:"10rem"}} />
            </div>
            <div className="uk-card-body uk-padding-small-top">
                <h3 className="uk-card-title uk-margin-remove">{post.node.title}</h3>
                <h6 className="uk-margin-small-top uk-text-muted">{post.node.publishedAt}</h6>
            </div>
          </Link>
          </section>
  )
}

export default Post
