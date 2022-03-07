import { useState } from 'react'
import arrow from './arrow.svg'
import './style.css'

//https://frontendpablo.hashnode.dev/build-a-carouselslider-in-react-from-scratch

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0)

  const length = pictures.length

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="carousel">
      {pictures.map((picture, index) => {
        return (
          <div className="carousel_picture" key={`${picture}-${index}`}>
            {index === current && (
              <img
                src={picture}
                key={`${picture}-${index}`}
                alt={picture}
                className="carousel_picture_img"
              />
            )}
          </div>
        )
      })}

      <img
        src={arrow}
        alt="arrow before"
        onClick={prev}
        className="carousel_arrow_before"
      />
      <img
        src={arrow}
        alt="arrow after"
        onClick={next}
        className="carousel_arrow_after"
      />
    </div>
  )
}

export default Carousel
