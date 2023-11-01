// Write your code here

import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearch = Suggestion => {
    this.setState({searchInput: Suggestion})
  }

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="BgContainer">
          <div className="cardContainer">
            <div className="logoContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
                alt="google logo"
                className="logo"
              />
            </div>
            <div className="searchListItems">
              <div className="searchIconContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="searchIcon"
                />
                <input
                  type="search"
                  className="searchElement"
                  onChange={this.onChangeSearchValue}
                  value={searchInput}
                />
              </div>
              <ul className="suggetionItems">
                {searchResults.map(eachItem => (
                  <SuggestionItem
                    key={eachItem.id}
                    Suggestion={eachItem.suggestion}
                    updateSearchInput={this.updateSearch}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
