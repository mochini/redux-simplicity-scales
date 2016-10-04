import React from 'react'
import ReactDOM from 'react-dom'

class Dimmer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      power: false,
      brightness: 0
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

        <div className="lightbulb" style={style}></div>

        <div className="container">

          <div className="row">

            <div className="col-md-12 text-center">

              <div className="btn-group">

                <button className="btn btn-default" disabled={!power} onClick={this._handleDecreaseBrightness.bind(this)}>-</button>

                <button className="btn btn-default" onClick={this._handleTogglePower.bind(this)}>
                  { (power) ? 'Power Off' : 'Power On' }
                </button>

                <button className="btn btn-default" disabled={!power} onClick={this._handleIncreaseBrightness.bind(this)}>+</button>

              </div>

            </div>

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
