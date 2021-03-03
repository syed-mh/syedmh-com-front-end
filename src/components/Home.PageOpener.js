import { Link } from 'react-router-dom'

import ImageWithOverlay from './ImageWithOverlay'
import PrimaryButton from './PrimaryButton'

const PageOpener = ({ featuredImage, alternativeText, project_category, title, slug }) => {
  return(
    <section className='page-section opener'>
      <ImageWithOverlay
        url={featuredImage}
        alternativeText={alternativeText} />
      <div className='content-container'>
        <h3 className='category'>
          <Link to={`/project_category/${project_category.slug}`}>
            {`${project_category.name}:`}
          </Link>
        </h3>
        <h2 className='title text-shadow'>
          {title}
        </h2>
        <PrimaryButton to={`/projects/${slug}`}>Explore</PrimaryButton>
      </div>
    </section>
  )
}

export default PageOpener