import { useState } from 'react'
import styled from 'styled-components'
import { aboutContent } from '../data/aboutdata'
import arrow from '../assets/arrow.svg'

const DetailsBox = styled.details`
  color: var(--color-primary);
  background-color: #f6f6f6;
  margin: 20px 0;
`

const Summary = styled.summary`
  display: flex;
  justify-content: space-between;
  padding: 6px 18px 6px 18px;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  border-radius: 5px;
  cursor: pointer;
`
const DetailsText = styled.div`
  padding: 30px 18px 20px 18px;
`
const Arrow = styled.img``

//https://thewebdev.info/2021/11/15/how-to-change-the-style-of-a-button-on-click-with-react/
//https://stackoverflow.com/questions/69345912/how-can-i-import-the-const-data-from-another-file-using-promise-react

function AboutContent() {
  const [cls, setCls] = useState('rotate0')
  return (
    <div>
      <style>{`
        .rotate0 {transform: rotate(0deg);}
        .rotate180 {transform: rotate(180deg);}
      `}</style>
      {aboutContent.map((e, index) => (
        <DetailsBox>
          <Summary
            onClick={() =>
              setCls((cls) => (cls === 'rotate180' ? 'rotate0' : 'rotate180'))
            }
          >
            {e.title}
            <Arrow src={arrow} className={cls} alt="arrow" />
          </Summary>
          <DetailsText>{e.text}</DetailsText>
        </DetailsBox>
      ))}
    </div>
  )
}

export default AboutContent
