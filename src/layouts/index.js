import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'tachyons';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Blog"
      meta={[
        { name: 'description', content: 'Blog' },
        { name: 'keywords', content: 'blog' }
      ]}
    />
    <Header />
    <div className="flex justify-center mw7 sans-serif near-black">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
