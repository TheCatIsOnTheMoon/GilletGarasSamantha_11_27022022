import styled from 'styled-components'

function Housing({ id, title, picture }) {
  return (
    <div>
      <img src={picture} alt="housing" />
      <span>{title}</span>
    </div>
  )
}

export default Housing
