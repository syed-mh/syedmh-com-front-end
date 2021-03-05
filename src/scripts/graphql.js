import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

/**
 * Class to initiate and minimally process
 * GraphQL Fetch requests to StrapiJS
 * 
 * @class
 * @typedef GraphQLFetch
 */
const GraphQLFetch = class {

  /**
   * Apollo client configuration
   * 
   * @static
   * */
  static client = new ApolloClient({
    url: process.env.REACT_APP_API_URI,
    cache: new InMemoryCache()
  })

  /**
   * Setter function to initiate fetch request
   * with appropriate schema based on the view
   * passed into it
   * 
   * @param { String } VIEW
   * @param { {setData: Function, setPreloader: Function, setError: Function} } SETTERS
   */
  setData = async (VIEW, SETTERS) => {
    switch(VIEW) {
      case 'Home':
        await this._fetchHomeData(SETTERS)
        break

      default:
        break
    }
  }

  /**
   * Fetcher function for HOME view
   * 
   * @private
   * @param { {setData: Function, setPreloader: Function, setError: Function} } SETTERS
   */
  _fetchHomeData = async (SETTERS) => {
    const _data = await GraphQLFetch.client.query({
      query: gql`
      query{
        projects(limit:1) {
          id,
          title,
          project_category {
            id
            name
          }
          featuredImage {
            url,
            alternativeText
          }
        },
        staticWebsiteText(id: 1) {
          textContent
        }
      }`
    })
    // _data = await _data.json()
    console.log(_data)
    await SETTERS.setPreloader(_data.loading)
    await SETTERS.setData(_data.data)
  }

}

export default GraphQLFetch