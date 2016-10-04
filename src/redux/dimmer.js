import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Dimmer extends React.Component {

  static propTypes = {
    power: React.PropTypes.bool.isRequired,
    brightness: React.PropTypes.number.isRequired
  }

  static defaultProps = {
    power: false,
    brightness: 100
  }

  render() {
    const { power, brightness } = this.props

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
    this.props.onTogglePower()
  }

  _handleDecreaseBrightness() {
    this.props.onDecreaseBrightness()
  }

  _handleIncreaseBrightness() {
    this.props.onIncreaseBrightness()
  }

}

const mapStateToProps = (state) => {
  return {
    power: state.power,
    brightness: state.brightness
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTogglePower: () => {
      dispatch(actions.togglePower())
    },
    onDecreaseBrightness: () => {
      dispatch(actions.decreaseBrightness())
    },
    onIncreaseBrightness: () => {
      dispatch(actions.increaseBrightness())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dimmer)
