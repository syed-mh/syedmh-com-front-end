import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Helmet from 'react-helmet';

import ErrorPage from './ErrorPage';
import PageOpener from '../components/Archive.PageTItle';
import Preloader from '../components/Preloader';
import ResourceCard from '../components/ResourceCard';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache()
})

const query = gql`
        query{
          projects(limit: 9) {
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
          }
        }`

const Projects = () => {

  const [ data, setData ] = useState({})  
  const [ preloader, setPreloader ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.query({
          query: query 
        })
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setPreloader(false)
      }
    })()
  }, [])

  console.log(data)

  if(preloader) {

    return <Preloader />

  } else if(error || !data) {

    return <ErrorPage error={error.message} />

  } else {

    return(
      <>
        <Helmet>
          <title>Projects - Full Stack Web Developer</title>
        </Helmet>
        <PageOpener title='Projects' />
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
  
  export default Projects;