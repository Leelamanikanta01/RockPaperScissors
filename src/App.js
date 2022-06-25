import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import './App.css'
import {
  AppContainer,
  RockPaperContainer,
  NamesContainer,
  NameHeading,
  ScoreContainer,
  ScoreName,
  ScoreValue,
  UlContainer,
  PopupContainer,
  PopupBtn,
  RulesImgContainer,
  RulesImg,
  CloseBtnContainer,
  CloseBtn,
} from './styledComponents'

import ResultItem from './components/ResultItem'
import ButtonCard from './components/ButtonCard'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isPlaying: false,
    myChoice: {},
    systemChoice: {},
    result: '',
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: false})
  }

  renderResultsView = () => {
    const {myChoice, systemChoice, result} = this.state

    return (
      <ResultItem
        myChoice={myChoice}
        systemChoice={systemChoice}
        result={result}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onPlayGame = (id, image) => {
    const randomSelection = Math.floor(Math.random() * choicesList.length)

    if (choicesList[randomSelection].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (
      choicesList[randomSelection].id === 'SCISSORS' &&
      id === 'PAPER'
    ) {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[randomSelection].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[randomSelection].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (
      choicesList[randomSelection].id === 'PAPER' &&
      id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (
      choicesList[randomSelection].id === 'SCISSORS' &&
      id === 'ROCK'
    ) {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        result: 'IT IS DRAW',
      })
    }
  }

  renderButtonsView = () => (
    <UlContainer>
      {choicesList.map(each => (
        <ButtonCard
          key={each.id}
          buttonItems={each}
          onPlayGame={this.onPlayGame}
        />
      ))}
    </UlContainer>
  )

  render() {
    const {score, isPlaying} = this.state
    return (
      <AppContainer>
        <RockPaperContainer>
          <NamesContainer>
            <NameHeading>
              Rock <br />
              Paper <br />
              Scissors
            </NameHeading>
          </NamesContainer>
          <ScoreContainer>
            <ScoreName>Score</ScoreName>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </RockPaperContainer>
        {isPlaying ? this.renderResultsView() : this.renderButtonsView()}

        <PopupContainer>
          <Popup
            modal
            trigger={
              <PopupBtn type="button" position="right center">
                RULES
              </PopupBtn>
            }
          >
            {close => (
              <RulesImgContainer>
                <CloseBtnContainer onClick={() => close()} type="button">
                  <CloseBtn>
                    <RiCloseLine />
                  </CloseBtn>
                </CloseBtnContainer>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImgContainer>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default App
