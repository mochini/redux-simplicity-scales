import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

class Dimmer extends React.Component {

  render() {
    const { power, brightness } = this.props

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
    this.props.onTogglePower()
  }

  _handleDecreaseBrightness() {
    this.props.onDecreaseBrightness()
  }

  _handleIncreaseBrightness() {
    this.props.onIncreaseBrightness()
  }

}

const mapStateToProps = (state, props) => ({
  power: state.power,
  brightness: state.brightness
})

const mapDispatchToProps = {
  onTogglePower: actions.togglePower,
  onDecreaseBrightness: actions.decreaseBrightness,
  onIncreaseBrightness: actions.increaseBrightness
}

export default connect(mapStateToProps, mapDispatchToProps)(Dimmer)
