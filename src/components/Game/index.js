import {Component} from 'react'

import {Popup} from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  GameTabsContainer,
  RulesButton,
  PopupView,
  PopupContainer,
  PopupImg,
  ResultPage,
  ResultTab,
  ResultName,
  ResultIcon,
} from './styledComponents'

import Header from '../Header'

import GameItem from '../GameItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    currentPage: 'gamePage',
    user: '',
    opponent: '',
    result: '',
  }

  changeCurrentPage = id => {
    const opponent = choicesList[Math.floor(Math.random() * 3)].id

    const user = id

    let result
    if (opponent === user) {
      result = 'IT IS DRAW'
    } else if (opponent === 'ROCK') {
      if (user === 'SCISSORS') {
        result = 'YOU LOSE'
      } else {
        result = 'YOU WON'
      }
    } else if (opponent === 'SCISSORS') {
      if (user === 'PAPER') {
        result = 'YOU LOSE'
      } else {
        result = 'YOU WON'
      }
    } else if (opponent === 'PAPER') {
      if (user === 'ROCK') {
        result = 'YOU LOSE'
      } else {
        result = 'YOU WON'
      }
    }

    let {score} = this.state

    if (result === 'YOU WON') {
      score += 1
    }
    if (result === 'YOU LOSE') {
      score -= 1
    }

    this.setState({currentPage: 'resultPage', opponent, user, score, result})
  }

  changeToGamePage = () => this.setState({currentPage: 'gamePage'})

  renderGamePage = () => (
    <GameTabsContainer>
      {choicesList.map(each => (
        <GameItem
          key={each.id}
          each={each}
          changeCurrentPage={this.changeCurrentPage}
        />
      ))}
    </GameTabsContainer>
  )

  renderResultPage = () => {
    const {user, opponent, result} = this.state

    const userObj = choicesList.filter(each => each.id === user)

    const opponentObj = choicesList.filter(each => each.id === opponent)

    return (
      <ResultPage>
        <ResultTab>
          <ResultName>YOU</ResultName>
          <ResultIcon alt="your choice" src={userObj[0].imageUrl} />
        </ResultTab>
        <ResultTab>
          <ResultName>OPPONENT</ResultName>
          <ResultIcon alt="opponent choice" src={opponentObj[0].imageUrl} />
        </ResultTab>
        <ResultTab>
          <ResultName as="p">{result}</ResultName>
          <RulesButton type="button" onClick={this.changeToGamePage}>
            PLAY AGAIN
          </RulesButton>
        </ResultTab>
      </ResultPage>
    )
  }

  renderCurrentPage = () => {
    const {currentPage} = this.state

    switch (currentPage) {
      case 'gamePage':
        return this.renderGamePage()
      case 'resultPage':
        return this.renderResultPage()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <MainContainer>
        <Header score={score} />
        {this.renderCurrentPage()}
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <PopupView>
              <RiCloseLine onClick={() => close()} />
              <PopupContainer>
                <PopupImg
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </PopupContainer>
            </PopupView>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default Game
