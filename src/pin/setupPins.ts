import config from '../config'
import {Button, Pin} from './Pin'
import {setupActions} from '../action/setupActions'
import {Gpio} from 'onoff'

const setupButton = ({actions, gpio, edge}: Button) => {
  const callback = setupActions(actions)

  const button = new Gpio(gpio, 'in', edge, {debounceTimeout: config.debounceTimeout})
  button.watch(callback)
}

const setupPin = (pin: Pin) => {
  switch (pin.type) {
  case 'button': return setupButton(pin)
  }
}

export const setupPins = () => {
  config.pins.forEach(setupPin)
}
