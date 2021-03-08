import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Collection = ({ collection }) => {
  const image = collection.products[0].images[0].localFile.childImageSharp.fluid
  return (
    <div>
      <Link className="link " to={`/shop/collections/${collection.handle}`}>
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <Img fluid={image} alt="" style={{maxHeight:"10rem"}}/>
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{collection.title}</h3>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Collection
