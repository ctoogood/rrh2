import React, { useState } from "react";
import Img from "gatsby-image";
import Thumbnail from "./thumbnail";

const BasicProductImageGallery = ({ selectedVariantImageId, images }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId || images[0])
  );

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);

  const handleClick = (image) => {
    setActiveImageThumbnail(image);
  };

  const gallery =
    images.length > 1 ? (
      <div className="uk-margin-top">
        {images.map((i) => (
          <Thumbnail
            key={i.id}
            active={activeImageThumbnail.id === i.id}
            onClick={handleClick}
            image={i}
          />
        ))}
      </div>
    ) : null;

  return (
    <section>
      <div>
        <Img fluid={activeImageThumbnail.localFile.childImageSharp.fluid}  style={{maxHeight:"400px"}} />
      </div>
      <div>{gallery}</div>
    </section>
  );
};

export default BasicProductImageGallery;