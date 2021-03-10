import PrimaryButton from './PrimaryButton'
import ResourceCard from './ResourceCard'

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <>
      <h1 className='title centered'>Featured Projects</h1>
      <section className='cards-container'>
        {featuredProjects.map(project => {
          return (
            <ResourceCard
              key={project.id}
              resourceName='projects'
              slug={project.slug}
              title={project.title}
              category={project.project_category}
              featuredImage={project.featuredImage.url}
              alternativeText={project.featuredImage.alternativeText}
            />
          )
        })}
      </section>
      <PrimaryButton className='centered' to='/projects'>View All</PrimaryButton>
    </>
  )
}

export default FeaturedProjects