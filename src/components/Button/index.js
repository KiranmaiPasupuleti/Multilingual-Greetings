import './index.css'

const Button = props => {
  const {eachLanguage, isActive, onClickLanguage} = props
  const {id, buttonText} = eachLanguage

  const onClickLanguageButton = () => onClickLanguage(id)

  const buttonClassName = isActive ? 'active btn' : 'btn'

  return (
    <li className="each-button-container">
      <button
        className={buttonClassName}
        onClick={onClickLanguageButton}
        type="button"
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Button
