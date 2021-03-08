import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	FacebookShareButton,
	TwitterShareButton,
	EmailShareButton,
} from 'react-share';
import {
    faFacebook,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons'

import '../../styles/share.scss';

const Share = ({ socialConfig }) => (
	<div className="post-social uk-margin-top uk-margin-bottom uk-text-center">
		<p className="uk-margin-remove uk-text-bold">Share:</p>
		<FacebookShareButton url={socialConfig.config.url} >
			<span className="icon uk-margin-small-right">
				<FontAwesomeIcon className="button facebook" icon={faFacebook} />
			</span>
		</FacebookShareButton>
		<TwitterShareButton url={socialConfig.config.url}  title={socialConfig.config.title} >
			<span className="icon uk-margin-small-right">
				<FontAwesomeIcon className="button twitter" icon={faTwitter} />
			</span>
		</TwitterShareButton>
		<EmailShareButton url={socialConfig.config.url}  title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon className="button email" icon={faEnvelope} />
			</span>
		</EmailShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
};
Share.defaultProps = {
	tags: [],
};

export default Share;