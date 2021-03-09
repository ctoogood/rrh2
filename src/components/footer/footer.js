import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import Mailchimp from '../utils/mailchimp';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
    return (
    <footer className="uk-width-1-1 uk-margin-top uk-light">
      <div>
        <Mailchimp />
      </div>
      <hr />
      <div className="uk-margin-top uk-container">
      <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s" data-uk-grid>
            <div>
              <h2 className="uk-h2 uk-margin-remove">Rosy Rose Herbalist</h2>
              <p>{data.site.siteMetadata.description}</p>
              <p><a href="mailto:rosyherbalist@gmail.com">rosyherbalist@gmail.com</a></p>            
            </div>
            <div>
              <h2 className="uk-h3">Let's Connect</h2>
              <a target="_blank"
                rel="noopener noreferrer" href="https://www.facebook.com/rosyroseherbalist/" className="uk-margin-small-right uk-width-auto" style={{width:30}} data-uk-icon="facebook"></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rosyherbalist/" className="uk-margin-small-right uk-width-auto" style={{width:30}} data-uk-icon="instagram"></a>
              </div>
              </div>
            </div>  
            <div>
            <p className="uk-text-center uk-margin-remove uk-text-muted"><a href="#">Delivery</a><span> | </span><a href="#">Privacy Policy</a><span> | </span><a href="#">Terms & Conditions</a></p>
            <p className="uk-text-center uk-margin-remove">© {new Date().getFullYear()}   </p>       
            </div>
    
    </footer>
    );
};

export default Footer;