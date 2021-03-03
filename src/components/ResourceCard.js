import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ImageWithOverlay from "./ImageWithOverlay"

const ResourceCard = ({slug, resourceName, title, featuredImage, alternativeText, description, category}) => {
  return (
    <article className={`resource-card ${description ? 'has-description' : ''}`}>
      <div className='inner'>
        <ImageWithOverlay url={featuredImage} alt={alternativeText} />
        <div className='card-details'>
          {category
            ?
              <Link className='card-category' to={`project_category/${category.slug}`}>
                <h4>{category.name}</h4>
              </Link>
            : ''}
          <Link className='card-title' to={`/${resourceName}/${slug}`}>
            <h3>{title}</h3>
            <FontAwesomeIcon icon={['fas', 'folder-open']} />
          </Link>
          {description ? <p className='card-description'>{description}</p> : ''}
        </div>
      </div>
    </article>
  )
}

export default ResourceCard