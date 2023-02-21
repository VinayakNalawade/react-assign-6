import {
  Navbar,
  NavTabsList,
  ScoreContainer,
  NavHeading,
  ScoreHeading,
  Score,
} from './styledComponents'

const Header = props => {
  const {score, choicesList} = props

  return (
    <Navbar>
      <NavTabsList>
        {choicesList.map(each => (
          <NavHeading key={each.id}>{each.id}</NavHeading>
        ))}
      </NavTabsList>
      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreContainer>
    </Navbar>
  )
}

export default Header
