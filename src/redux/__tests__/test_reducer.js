import reducer from '../reducer'
import * as actionTypes from '../action_types'

jest.unmock('../reducer')
jest.unmock('../action_types')

describe('reducer', () => {

  it('toggles power', () => {
    let state = {
      power: false,
      brightness: 100
    }
    let action = {
      type: actionTypes.TOGGLE_POWER
    }
    let expected = {
      power: true,
      brightness: 100
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('increases brightness', () => {
    let state = {
      power: true,
      brightness: 0
    }
    let action = {
      type: actionTypes.INCREASE_BRIGHTNESS
    }
    let expected = {
      power: true,
      brightness: 10
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('cant increase brightness past 100', () => {
    let state = {
      power: true,
      brightness: 100
    }
    let action = {
      type: actionTypes.INCREASE_BRIGHTNESS
    }
    let expected = {
      power: true,
      brightness: 100
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('decreases brightness', () => {
    let state = {
      power: true,
      brightness: 100
    }
    let action = {
      type: actionTypes.DECREASE_BRIGHTNESS
    }
    let expected = {
      power: true,
      brightness: 90
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('cant decrease brightness past 0', () => {
    let state = {
      power: true,
      brightness: 0
    }
    let action = {
      type: actionTypes.DECREASE_BRIGHTNESS
    }
    let expected = {
      power: true,
      brightness: 0
    }
    expect(reducer(state, action)).toEqual(expected)
  })

})
