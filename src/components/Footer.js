import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className='site-footer'>
      <h6>© SyedMH | {new Date().getFullYear()}</h6>
      <span className='icons'>
        <a href='https://github.com/syed-mh/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href='https://instagram.com/syed.mh' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a href='https://www.dropbox.com/s/t7kpt3gb3fx56o1/Syed%20Mohammed%20Hassan%20CV.pdf?dl=1' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={['fas', 'file-pdf']} />
        </a>
      </span>
    </footer>
  )
}

export default Footer