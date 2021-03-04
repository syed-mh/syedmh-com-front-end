import React from 'react';
import Helmet from 'react-helmet';

import PageOpener from '../components/Archive.PageTItle';

const About = () => {
  return(
    <>
      <Helmet>
        <title>About | SyedMH - Full Stack Web Developer</title>
      </Helmet>
      <PageOpener title='About' />
    </>
  )
}

export default About;