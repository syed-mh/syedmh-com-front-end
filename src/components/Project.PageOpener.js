import ImageWithOverlay from '../components/ImageWithOverlay';

const PageOpener = ({ featuredImage, photoCredit }) => {
  return (
    <>
      <ImageWithOverlay
        url={featuredImage.url}
        alternativeText={featuredImage.alternativeText}
        credit={photoCredit}
      />
    </>
  )
}

export default PageOpener