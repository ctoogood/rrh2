import React from 'react';

const Footer = () => {
    return (
        <footer className="uk-text-center uk-margin-large uk-background-secondary uk-width-1-1">
      <hr />
      <p>rosyherbalist@gmail.com</p>
      <p>07990545654</p>
      <a target="_blank"
        rel="noopener noreferrer" href="https://www.facebook.com/rosyroseherbalist/" className="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rosyherbalist/" className="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>

      <div>© {new Date().getFullYear()}</div>
    </footer>
    );
};

export default Footer;