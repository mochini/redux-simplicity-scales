import * as actionTypes from './action_types'

export const togglePower = () =>  {
  return {
    type: actionTypes.TOGGLE_POWER
  }
}

export const decreaseBrightness = () =>  {
  return {
    type: actionTypes.DECREASE_BRIGHTNESS
  }
}

export const increaseBrightness = () =>  {
  return {
    type: actionTypes.INCREASE_BRIGHTNESS
  }
}
