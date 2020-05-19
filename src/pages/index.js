import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Video from '../containers/Video';
import CTABanner from '../containers/CTABanner';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>3D Product Animation | Nimble viz</title>
      <link rel="canonical" href="http://nimbleviz.com" />
    </Helmet>
    <Layout>
      <CTABanner />
      <Video />
    </Layout>
  </>
);
