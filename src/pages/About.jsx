import styled from 'styled-components'
import BannerAbout from '../components/BannerAbout'
import AboutContent from '../components/AboutContent'

const AboutBox = styled.div`
  margin: 1rem 1rem 5rem 1rem;
`

function About() {
  return (
    <AboutBox>
      <BannerAbout />
      <AboutContent />
    </AboutBox>
  )
}

export default About
