import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { Dimmer } from '../dimmer'

jest.unmock('../dimmer')

describe('dimmer component', () => {

  it('renders dimmer', () => {
    const dimmer = shallow(
      <Dimmer brightness={100} power={false} />
    )

    expect(dimmer.hasClass('dimmer')).toBeTruthy()
    expect(dimmer.children().length).toEqual(2)

    const lightbulb = dimmer.childAt(0)
    expect(lightbulb.hasClass('lightbulb')).toBeTruthy()

    const controls = dimmer.childAt(1)
    expect(controls.hasClass('controls')).toBeTruthy()

    const buttons = controls.childAt(0)
    expect(buttons.children().length).toEqual(3)

    const decrease = buttons.childAt(0)
    expect(decrease.text()).toEqual('-')

    const increase = buttons.childAt(2)
    expect(increase.text()).toEqual('+')
  })

  it('renders dimmer with power off', () => {
    const dimmer = shallow(
      <Dimmer brightness={50} power={false} />
    )

    const lightbulb = dimmer.childAt(0)
    expect(lightbulb.props().style.backgroundColor).toEqual('#000000')
    expect(lightbulb.children().length).toEqual(0)

    const controls = dimmer.childAt(1)
    const buttons = controls.childAt(0)

    const decrease = buttons.childAt(0)
    expect(decrease.props().disabled).toBeTruthy()

    const power = buttons.childAt(1)
    expect(power.text()).toEqual('Power On')

    const increase = buttons.childAt(2)
    expect(increase.props().disabled).toBeTruthy()
  })

  it('renders dimmer with power on', () => {
    const dimmer = shallow(
      <Dimmer brightness={50} power={true} />
    )

    const lightbulb = dimmer.childAt(0)
    expect(lightbulb.props().style.backgroundColor).toEqual('#FF0000')
    expect(lightbulb.children().length).toEqual(1)
    expect(lightbulb.childAt(0).is('h1')).toBeTruthy
    expect(lightbulb.childAt(0).text()).toEqual('50')

    const controls = dimmer.childAt(1)
    const buttons = controls.childAt(0)

    const decrease = buttons.childAt(0)
    expect(decrease.props().disabled).toBeFalsy()

    const power = buttons.childAt(1)
    expect(power.text()).toEqual('Power Off')

    const increase = buttons.childAt(2)
    expect(increase.props().disabled).toBeFalsy()
  })

  it('cannot increase past 100', () => {
    const dimmer = shallow(
      <Dimmer brightness={100} power={true} />
    )

    const controls = dimmer.childAt(1)
    const buttons = controls.childAt(0)
    const increase = buttons.childAt(2)
    expect(increase.props().disabled).toBeTruthy()
  })

  it('cannot decrease past 0', () => {
    const dimmer = shallow(
      <Dimmer brightness={0} power={true} />
    )

    const controls = dimmer.childAt(1)
    const buttons = controls.childAt(0)
    const decrease = buttons.childAt(0)
    expect(decrease.props().disabled).toBeTruthy()
  })
})
