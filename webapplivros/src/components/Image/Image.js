import './Image.css';
const Image = ({ image, alt }) => {
  return (
    <div className="Image">
      <img src={image} alt={alt} />
    </div>
  )
}

export default Image;