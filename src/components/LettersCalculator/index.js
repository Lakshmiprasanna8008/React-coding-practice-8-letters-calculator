// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: 0}

  counting = event => {
    this.setState({searchInput: event.target.value.length})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="whole-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="inner-container">
          <h1>Calculate the Letters you enter</h1>
          <label className="input-text" htmlFor="count">
            Enter the phrase
          </label>{' '}
          <br />
          <input
            type="text"
            id="count"
            placeholder="Enter the phrase"
            onChange={this.counting}
          />
          <p className="result">No.of letters: {searchInput}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
