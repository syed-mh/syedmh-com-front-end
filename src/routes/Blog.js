import Helmet from 'react-helmet';

import PageTitle from '../components/PageTItle';

const Blog = () => {
  return(
    <>
      <Helmet>
        <title>Blog | SyedMH - Full Stack Web Developer</title>
      </Helmet>
      <PageTitle title='Blog' />
    </>
  )
  }
  
  export default Blog;