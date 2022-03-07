import './style.css'
import DetailBar from '../DetailBar/DetailBar'
import Caroussel from '../Caroussel/Caroussel'
import starTrue from './star_true.svg'
import starFalse from './star_false.svg'

function HousePage({
  id,
  title,
  pictures,
  description,
  hostName,
  hostPicture,
  rating,
  location,
  equipments,
  tags,
}) {
  const starsTrue = Number(rating)
  const starsFalse = Number(5 - rating)
  return (
    <div className="house_box">
      <Caroussel pictures={pictures} />

      <div className="house_presentation">
        <div className="house_presentation_titleandtags">
          <div className="house_title">{title}</div>
          <div className="house_location">{location}</div>
          <ul className="house_tags">
            {tags.map((tag, index) => (
              <li key={index} className="house_tags_tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="house_presentation_ratingandhost">
          {/* https://thewebdev.info/2021/05/28/how-to-repeat-an-element-n-times-with-react/ */}
          <div className="house_rating">
            {[...Array(starsTrue)].map((e, i) => (
              <img
                key={i}
                src={starTrue}
                alt="star true"
                className="house_rating_star"
              />
            ))}
            {[...Array(starsFalse)].map((e, i) => (
              <img
                key={i}
                src={starFalse}
                alt="star false"
                className="house_rating_star"
              />
            ))}
          </div>

          <div className="house_host">
            <p className="house_host_name">{hostName}</p>
            <img src={hostPicture} className="house_host_picture" alt="host" />
          </div>
        </div>
      </div>
      <div className="description">
        <DetailBar
          key={`"description"-${id}`}
          title="Description"
          text={description}
        />
      </div>
      <div className="equipments">
        <DetailBar
          key={`"equipments"-${id}`}
          title="Equipments"
          text={equipments.map((e, index) => (
            <span key={`${e}-${index}`}>{e}</span>
          ))}
        />
      </div>
    </div>
  )
}

export default HousePage