import { useState } from 'react'
import styled from 'styled-components'
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

const aboutContent = [
  {
    title: 'Fiabilité',
    text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Sécurité',
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function AboutContent() {
  const [cls, setCls] = useState('rotate0')
  return (
    <div>
      <style>{`
        .rotate0 {transform: rotate(0deg);}
        .rotate180 {transform: rotate(180deg);}
      `}</style>
      {aboutContent.map((e, index) => (
        <DetailsBox key={index}>
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
