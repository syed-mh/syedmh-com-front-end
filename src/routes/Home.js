import React, { useEffect, useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import ErrorPage from './ErrorPage'
import PageOpener from '../components/Home.PageOpener'
import FeaturedProjects from '../components/Home.FeaturedProjects'
import PrimaryButton from '../components/PrimaryButton'
import Preloader from '../components/Preloader'

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
          homeAbout: staticWebsiteTexts(where: {slug: "home-about"}) {
            textContent
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
        <PageOpener
          slug = {data.highlightProject[0].slug}
          featuredImage={data.highlightProject[0].featuredImage.url}
          alternativeText={data.highlightProject[0].featuredImage.alternativeText}
          project_category={data.highlightProject[0].project_category}
          title={data.highlightProject[0].title} />
        <section className='page-section about'>
          <h1 className='title'>
            Full Stack Web Developer
          </h1>
          <p>{data.homeAbout[0].textContent}</p>
          <PrimaryButton to='/about'>Read More</PrimaryButton>
        </section>
        <FeaturedProjects featuredProjects={data.featuredProjects} />
      </>
    )

  }

}
  
  export default Home;