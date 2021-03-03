import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorPage = ({ error }) => {
  return(
        <section id='error'>
          <div className='content centered'>
            <FontAwesomeIcon icon={['fas', 'handshake-slash']} />
            <h2>Something went wrong</h2>
            <h5>Apologies for the inconvenience. Please try again later.</h5>
            <details>
              <summary>Error Message</summary>
              {error}
            </details>
          </div>
        </section>
    )
}

export default ErrorPage