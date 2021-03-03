const ImageWithOverlay = ({ url, alternativeText }) => {
  return(
    <figure className='featured-image-container rounded shadow'>
      <img className='featured-image' src={`${process.env.REACT_APP_SERVER_URI}${url}`} alt={alternativeText} />
    </figure>
  )
}

export default ImageWithOverlay