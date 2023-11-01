// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {key, Suggestion, updateSearchInput} = props

  const arrowClicked = () => {
    updateSearchInput(Suggestion)
  }

  return (
    <li className="lisiItemContainer">
      <p>{Suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arroeIcone"
        onClick={arrowClicked}
      />
    </li>
  )
}

export default SuggestionItem
