import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Helmet from 'react-helmet';

import ErrorPage from './ErrorPage';
import PageTitle from '../components/Archive.PageTItle';
import PageOpener from '../components/Project.PageOpener';
import PageView from '../components/PageView';
import Preloader from '../components/Preloader';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache()
})

const Project = () => {

  const { slug } = useParams();

  const [ data, setData ] = useState({})  
  const [ preloader, setPreloader ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    if(slug) {
      (async () => {
        try {
          const { data } = await client.query({
            query: gql`
              query {
                projects (where: {slug:"${slug}"} ){
                  title,
                  summary,
                  details,
                  photoCredit,
                  project_type {
                    name,
                    slug
                  },
                  project_category {
                    name,
                    slug
                  },
                  repo,
                  url,
                  featuredImage {
                    alternativeText,
                    url
                  },
                  technologies {
                    name,
                    slug
                  },
                  pageViews {
                    viewName,
                    desktopView {
                      alternativeText,
                      url
                    },
                    tabletView {
                      alternativeText,
                      url
                    },
                    mobileView {
                      alternativeText,
                      url
                    }
                  },
                  viewNames: pageViews {
                    viewName
                  }
                }
              }` 
          })
          setData(data.projects[0])
          setError(false)
        } catch (error) {
          setError(error)
        } finally {
          setPreloader(false)
        }
      })()
    }
  }, [slug])

  console.log(data, preloader, error)

  if(preloader) {

    return <Preloader />

  } else if(error || !data) {

    return <ErrorPage error={error.message} />

  } else {

    return (
      <>
        <Helmet>
          <title>{data.title} | SyedMH - Full Stack Web Developer</title>
          <meta name='description' content={data.summary} />
        </Helmet>
        <PageTitle title={data.title} />
        <section className='page-section project-opener'>
          <PageOpener
            featuredImage={data.featuredImage}
            photoCredit={data.photoCredit}
          />
        </section>
        <section className='page-section project-details'>
          <div className='project-details'>
            <div className='inner'>
              <h2>Overview</h2>
              <p>{data.details}</p>
            </div>
          </div>
          <section className='project-details-card'>
            <div className='inner rounded'>
              {data.repo &&
                <span className='details-item'>
                  <span className='title'>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </span>
                  <span className='content'>
                    <a href={data.repo} target='_blank' rel='noreferrer'>{data.repo}</a>
                  </span>
                </span>
              }
              {data.url &&
                <span className='details-item'>
                  <span className='title'>
                    <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
                  </span>
                  <span className='content'>
                    <a href={data.url} target='_blank' rel='noreferrer'>{data.url}</a>
                  </span>
                </span>
              }
              <span className='details-item'>
                <span className='title'>
                  Project Category:
                </span>
                <span className='content'>
                  <Link
                    to={`/project_category/${data.project_category.slug}`}
                    className='tag rounded'
                  >
                    {data.project_category.name}
                  </Link>
                </span>
              </span>
              <span className='details-item'>
                <span className='title'>
                  Project Type:
                </span>
                <span className='content'>
                  <Link
                    to={`/project_type/${data.project_type.slug}`}
                    className='tag rounded'
                  >
                    {data.project_type.name}
                  </Link>
                </span>
              </span>
              <span className='details-item'>
                <span className='title'>
                  Technologies Used:
                </span>
                <span className='content'>
                  {data.technologies.map((technology, index) => {
                    return (
                      <a
                        key={index}
                        href={`/technology/${technology.slug}`}
                        className='tag rounded'
                      >
                        {technology.name}
                      </a>
                    )
                  })}
                </span>
              </span>
            </div>
          </section>
        </section>
        <section className='page-section'>
          <h2>Take a look</h2>
          <p class='disclaimer'>Note: The previews below do not showcase interactive elements of the project.</p>
          <section className='page-view'>
            <div className='view-configuration'>
              
            </div>
            <div className='inner'>
              <PageView
                view='desktop'
                image={data.pageViews[0].desktopView}
              />
              <PageView
                view='tablet'
                image={data.pageViews[0].tabletView}
              />
              <PageView
                view='mobile'
                image={data.pageViews[0].mobileView}
              />
            </div>
          </section>
        </section>
      </>
    )

  }

}

export default Project