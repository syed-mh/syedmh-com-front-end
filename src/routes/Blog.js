import Helmet from 'react-helmet';

import PageOpener from '../components/Archive.PageTItle';

const Blog = () => {
  return(
    <>
      <Helmet>
        <title>Blog | SyedMH - Full Stack Web Developer</title>
      </Helmet>
      <PageOpener title='Blog' />
    </>
  )
  }
  
  export default Blog;