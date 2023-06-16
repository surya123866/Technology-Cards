import './index.css'

const TechnologyCard = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={`${className} container`}>
      <div className="textContainer">
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="imageContainer">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default TechnologyCard
