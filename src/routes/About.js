import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import ErrorPage from './ErrorPage';
import PageTitle from '../components/PageTItle';
import Preloader from '../components/Preloader';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache()
})

const query = gql`
                query {
                  about {
                    aboutMe,
                    aboutImage {
                      url,
                      alternativeText
                    },
                    technologies {
                      technologyName,
                      icon {
                        url,
                        alternativeText
                      }
                    },
                    otherExpertise {
                      title,
                      listContent {
                        detail
                      }
                    }
                  }
                }`

const About = () => {

  const [ data, setData ] = useState(null)
  const [ preloader, setPreloader ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.query({
          query: query 
        })
        setData(data.about)
      } catch (error) {
        setError(error)
      } finally {
        setPreloader(false)
      }
    })()
  }, [])

  if(preloader) {

    return <Preloader />

  } else if(error) {

    return <ErrorPage error={error.message} />

  } else {

    return(
      <>
        <Helmet>
          <title>About | SyedMH - Full Stack Web Developer</title>
        </Helmet>
        <PageTitle title='About me' />
        <section className='page-section about-me _about'>
          <div className='about-me'>
            <ReactMarkdown source={data.aboutMe} />
          </div>
          <img src={`${process.env.REACT_APP_SERVER_URI}${data.aboutImage.url}`} alt={data.aboutImage.alternativeText} />
        </section>
        <section className='page-section technologies _about'>
          <h2>What I use</h2>
          <ul className='technologies-container'>
            {data.technologies.map((technology, index) => {
              return (
                <li key={index} className='technology-icon'>
                  <figure>
                    <span className='inner'>
                      <img src={`${process.env.REACT_APP_SERVER_URI}${technology.icon.url}`} alt={technology.technologyName} />
                    </span>
                  </figure>
                </li>
              )
            })}
          </ul>
        </section>
        <section className='page-section _about'>
          <h2>Other tools I'm good at</h2>
          <ul className='expertise-container'>
            {
              data.otherExpertise.map((expertise, index) => {
                return (
                  <li key={index} className='expertise'>
                    {expertise.title}
                    <ul className='inner'>
                      {expertise.listContent.map((content, index) => {
                        return(
                          <li key={index}>{content.detail}</li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </>
    )

  }

}

export default About;