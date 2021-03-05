import { useEffect, useRef } from "react"

const PageView = ({ viewport, image }) => {

  const figure = useRef()
  const img = useRef()

  useEffect(() => {
    if(figure.current.classList.contains('loading')) return false
    figure.current.classList.add('loading')
  }, [viewport])

  const imageOnLoad = () => figure.current.classList.remove('loading')

  return (
    <div className={`${viewport} view rounded shadow`}>
      <span className='title-bar'>
        <span className='controls'></span>
      </span>
      <figure className='view-container' ref={figure}>
        <img
          src={`${process.env.REACT_APP_SERVER_URI}${image.url}`}
          alt={image.alternativeText}
          ref={img}
          onLoad={imageOnLoad}
        />
      </figure>
    </div>
  )
}

export default PageView