import { useParams } from 'react-router-dom';

import PageOpener from '../components/Archive.PageTItle';
import Helmet from 'react-helmet';

const ProjectCategory = () => {

  const { slug } = useParams()

  console.log(slug)

    return(
      <>
        <Helmet>
          <title>{slug.split('-').join(' ')} | SyedMH - Full Stack Web Developer</title>
        </Helmet>
        <PageOpener title={slug.split('-').join(' ')} />
      </>
    )
}

export default ProjectCategory;