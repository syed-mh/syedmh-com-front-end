import React from 'react';
import Helmet from 'react-helmet';

import PageTitle from '../components/PageTItle';

const About = () => {
  return(
    <>
      <Helmet>
        <title>About | SyedMH - Full Stack Web Developer</title>
      </Helmet>
      <PageTitle title='About' />
    </>
  )
}

export default About;