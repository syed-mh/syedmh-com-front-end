const PageView = ({ view, image }) => {
  return (
    <div className={`${view} view rounded shadow`}>
      <span className='title-bar'>
        <span className='controls'></span>
      </span>
      <figure className='view-container'>
        <img
          src={`${process.env.REACT_APP_SERVER_URI}${image.url}`}
          alt={image.alternativeText}
        />
      </figure>
    </div>
  )
}

export default PageView