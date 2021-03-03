import { Link } from 'react-router-dom'

const PrimaryButton = ({to, children, className}) => {
  
  return (
    <button className={`primary-button ${className ? className : ''}`}>
      <Link to={to}>
        {children}
      </Link>
    </button>
  )

}

export default PrimaryButton