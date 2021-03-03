import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PrimaryButton from '../components/PrimaryButton'

const NotFound = () => {
  return(
        <section id='error' className='not-found'>
          <div className='content centered'>
            <FontAwesomeIcon icon={['fas', 'plus-circle']} />
            <h2>"I think, therefore I am."</h2>
            <h5>is not something this route would say</h5>
            <PrimaryButton to='/' className='centered'>go to homepage</PrimaryButton>
          </div>
        </section>
    )
}

export default NotFound