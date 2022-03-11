import { useState } from 'react';
import arrow from './arrow.svg';
import './style.css';

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const length = pictures.length;

  function isVisible() {
    if (pictures.length < 2) {
      return false;
    }
    return true;
  }

  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prev() {
    setCurrent(current === 0 ? length - 1 : current - 1);
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
            {index === current && (
              <span className="carousel_text">{`${index + 1}/${length}`}</span>
            )}
          </div>
        );
      })}
      {isVisible() && (
        <img
          src={arrow}
          alt="arrow before"
          onClick={prev}
          className="carousel_arrow_before"
        />
      )}
      {isVisible() && (
        <div onClick={prev} className="carousel_arrow_area_before"></div>
      )}
      {isVisible() && (
        <img
          src={arrow}
          alt="arrow after"
          onClick={next}
          className="carousel_arrow_after"
        />
      )}
      {isVisible() && (
        <div onClick={next} className="carousel_arrow_area_after"></div>
      )}
    </div>
  );
}

export default Carousel;
