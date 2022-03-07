import arrow from './arrow.svg'
import './style.css'

function Caroussel({ pictures }) {
  return (
    <div className="caroussel">
      <img src={arrow} alt="arrow before" className="caroussel_arrow_before" />
      <img src={arrow} alt="arrow after" className="caroussel_arrow_after" />

      <img src={pictures[0]} alt="house" className="caroussel_picture" />
    </div>
  )
}

export default Caroussel
