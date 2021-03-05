import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Helmet from 'react-helmet';

import ErrorPage from './ErrorPage';
import PageTitle from '../components/PageTItle';
import Preloader from '../components/Preloader';
import ResourceCard from '../components/ResourceCard';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache()
})

const ProjectType = () => {

  const [ data, setData ] = useState({})
  const [ preloader, setPreloader ] = useState(true)
  const [ error, setError ] = useState(false)

  const { slug } = useParams()

  useEffect(() => {
    if(slug) {
      (async () => {
        try {
          const { data } = await client.query({
            query: gql`
              query{
              projects(limit: 9 where: {project_type: {slug: "${slug}"}}) {
                slug,
                title,
                project_category {
                  slug,
                  name
                },
                featuredImage {
                  url,
                  alternativeText
                }
                summary
              },
              projectTypes (where: {slug: "${slug}"}) {
                name
              }
            }` 
          })
          if(data.projects.length) {
            setData(data)
            setError(false)
          } else {
            setError({message: 'No projects found'})
          }
        } catch (error) {
          setError(error)
        } finally {
          setPreloader(false)
        }
      })()
    }
  }, [slug])

  if(preloader) {

    return <Preloader />

  } else if(error || !Object.keys(data).length) {

    return <ErrorPage error={error.message} />

  } else {

    return(
      <>
        <Helmet>
          <title>{data.projectTypes[0].name} Projects | SyedMH - Full Stack Web Developer</title>
        </Helmet>
        <PageTitle title={`${data.projectTypes[0].name} Projects`} />
        <section className='page-section'>
          <section className='cards-container'>
            {data.projects.map((project, index) => {
              return (
                <ResourceCard
                  key={index}
                  slug={project.slug}
                  resourceName='projects'
                  title={project.title}
                  category={project.project_category}
                  featuredImage={project.featuredImage.url}
                  alternativeText={project.featuredImage.alternativeText}
                />
              )
            })}
          </section>
        </section>
      </>
    )

  }
}

export default ProjectType;