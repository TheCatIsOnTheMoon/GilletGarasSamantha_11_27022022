import arrow from './arrow.svg'
import './style.css'

function DetailBar({ title, text }) {
  return (
    <div>
      <details>
        <summary>
          {title}
          <img src={arrow} alt="arrow" className="detail_arrow_close" />
        </summary>
        <p>{text}</p>
      </details>
    </div>
  )
}

export default DetailBar
