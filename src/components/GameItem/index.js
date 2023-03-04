import {GameTabButton, GameTabImg} from './styledComponents'

const GameItem = props => {
  const {each, changeCurrentPage} = props

  const onClickPage = event => changeCurrentPage(event)
  return (
    <GameTabButton
      data-testid={`${each.id.toLowerCase()}Button`}
      value={each.id}
      onClick={onClickPage}
      type="button"
    >
      <GameTabImg alt={each.id} src={each.imageUrl} />
    </GameTabButton>
  )
}

export default GameItem
