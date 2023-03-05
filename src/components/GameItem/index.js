import {GameTabItem, GameTabButton, GameTabImg} from './styledComponents'

const GameItem = props => {
  const {each, changeCurrentPage} = props

  const onChangePage = () => changeCurrentPage(each.id)

  return (
    <GameTabItem key={each.id}>
      <GameTabButton
        data-testid={`${each.id.toLowerCase()}Button`}
        value={each.id}
        onClick={onChangePage}
        type="button"
      >
        <GameTabImg alt={each.id} src={each.imageUrl} />
      </GameTabButton>
    </GameTabItem>
  )
}

export default GameItem
