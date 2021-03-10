import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Helmet from 'react-helmet';

import ErrorPage from './ErrorPage';
import PageOpener from '../components/Home.PageOpener';
import FeaturedProjects from '../components/Home.FeaturedProjects';
import PrimaryButton from '../components/PrimaryButton';
import Preloader from '../components/Preloader';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache()
})

const query = gql`
        query{
          highlightProject: projects(limit:1 where: {highlight: true}) {
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
          },
          featuredProjects: projects(limit: 3, where: {featured: true}) {
            id,
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
          homeAbout {
            designation,
            content
          }
        }`

const Home = () => {

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

  if(preloader) {

    return <Preloader />

  } else if(error || !data) {

    return <ErrorPage error={error.message} />

  } else {

    return(
      <>
        <Helmet>
          <title>SyedMH - Full Stack Web Developer</title>
        </Helmet>
        <section className='page-section opener'>
          <PageOpener
            slug = {data.highlightProject[0].slug}
            featuredImage={data.highlightProject[0].featuredImage.url}
            alternativeText={data.highlightProject[0].featuredImage.alternativeText}
            project_category={data.highlightProject[0].project_category}
            title={data.highlightProject[0].title}
          />
        </section>
        <section className='page-section about'>
          <h1 className='title'>
            {data.homeAbout.designation}
          </h1>
          <p>{data.homeAbout.content}</p>
          <PrimaryButton to='/about'>Read More</PrimaryButton>
        </section>
        <section className='page-section featured-projects'>
          <FeaturedProjects featuredProjects={data.featuredProjects} />
        </section>
      </>
    )

  }

}
  
  export default Home;