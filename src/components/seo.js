import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description, image, slug, children}) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					siteUrl
          favicon
          image
				}
			}
		}
	`);

	return (
		<Helmet htmlAttributes={{lang: `en`}} titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
			<title>{title}</title>
			<meta name='description' content={description || data.site.siteMetadata.description} />
			<link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`} />
			<link rel='icon' href={data.site.siteMetadata.favicon} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content={data.site.siteMetadata.author} />
			<meta name='og:title' content={title} />
			<meta name='og:description' content={description || data.site.siteMetadata.description} />
			<meta name='og:image' content={image || data.site.siteMetadata.image} />
			<meta name='og:type' content='website' />
			<meta name='og:url' content={`${data.site.siteMetadata.siteUrl}${slug}`} />
			<meta name='og:site_name' content={data.site.siteMetadata.title} />
			{children}
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	slug: PropTypes.string,
	children: PropTypes.node,
}

export default SEO;