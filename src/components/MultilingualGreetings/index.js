import {Component} from 'react'

import Button from '../Button'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {activeId: languageGreetingsList[0].id}

  onClickLanguage = id => {
    this.setState({activeId: id})
  }

  getImageElement = () => {
    const {activeId} = this.state

    const activeIndex = languageGreetingsList.findIndex(
      eachLanguage => eachLanguage.id === activeId,
    )

    const {imageUrl, imageAltText} = languageGreetingsList[activeIndex]

    return <img src={imageUrl} alt={imageAltText} className="language-image" />
  }

  render() {
    const {activeId} = this.state
    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(eachLanguage => (
            <Button
              key={eachLanguage.id}
              eachLanguage={eachLanguage}
              isActive={eachLanguage.id === activeId}
              onClickLanguage={this.onClickLanguage}
            />
          ))}
        </ul>
        {this.getImageElement()}
      </div>
    )
  }
}

export default MultilingualGreetings
