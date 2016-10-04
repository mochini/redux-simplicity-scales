import * as actionTypes from './action_types'

const INITIAL_STATE = {
  power: false,
  brightness: 100
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case actionTypes.TOGGLE_POWER:
      return {
        ...state,
        power: !state.power
      }

    case actionTypes.DECREASE_BRIGHTNESS:
      return {
        ...state,
        brightness: Math.max(0, state.brightness - 10)
      }

    case actionTypes.INCREASE_BRIGHTNESS:
      return {
        ...state,
        brightness: Math.min(100, state.brightness + 10)
      }

    default:
      return state

  }

}

export default reducer
