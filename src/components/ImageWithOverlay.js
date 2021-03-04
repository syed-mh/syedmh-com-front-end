const ImageWithOverlay = ({ url, alternativeText, credit }) => {
  return(
    <figure className='featured-image-container rounded shadow'>
      <img className='featured-image' src={`${process.env.REACT_APP_SERVER_URI}${url}`} alt={alternativeText} />
      {credit &&
        <span className='photo-credits'>{credit}</span>
      }
    </figure>
  )
}

export default ImageWithOverlay