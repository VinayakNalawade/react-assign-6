import {
  Navbar,
  NavTabsList,
  ScoreContainer,
  NavHeading,
  ScoreHeading,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <Navbar>
      <NavTabsList>
        <NavHeading>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </NavHeading>
      </NavTabsList>
      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreContainer>
    </Navbar>
  )
}

export default Header
