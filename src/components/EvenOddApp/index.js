import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state: {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prev => ({count: prev.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const countText = count % 2 === 0 ? 'even' : 'odd'

    return (
      <div className="app-container">
        <div className="content-container">
          <h1>Count {count}</h1>
          <p>count is {countText}</p>
          <div>
            <button
              type="button"
              onClick={this.onIncrement}
              className="increase-button"
            >
              Increment
            </button>
            <p>*Increase By Random number count between 1 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
