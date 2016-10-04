import React from 'react'
import ReactDOM from 'react-dom'

class Dimmer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      power: false,
      brightness: 100
    }
  }

  render() {
    const { power, brightness } = this.state

    const style = {
      backgroundColor: (power) ? '#FF0000': '#000000',
      opacity: (power) ? (brightness / 100 ) * .8 + .1 : 100
    }

    return (
      <div className="dimmer">

        <div className="lightbulb" style={style}>

          {(power) ? <h1>{brightness}</h1> : '' }

        </div>

        <div className="controls">

          <div className="btn-group">

            <button className="btn btn-lg btn-danger" disabled={!power || brightness == 0} onClick={this._handleDecreaseBrightness.bind(this)}>-</button>

            <button className="btn btn-lg btn-default" onClick={this._handleTogglePower.bind(this)}>
              { (power) ? 'Power Off' : 'Power On' }
            </button>

            <button className="btn btn-lg btn-danger" disabled={!power || brightness == 100} onClick={this._handleIncreaseBrightness.bind(this)}>+</button>

          </div>

        </div>

      </div>

    )
  }

  _handleTogglePower() {
    this.setState({
      power: !this.state.power
    })
  }

  _handleDecreaseBrightness() {
    this.setState({
      brightness: Math.max(0, this.state.brightness - 10)
    })
  }

  _handleIncreaseBrightness() {
    this.setState({
      brightness: Math.min(100, this.state.brightness + 10)
    })
  }

}

ReactDOM.render(<Dimmer />, document.getElementById('app'))
