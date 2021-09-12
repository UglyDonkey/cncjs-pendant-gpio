import config from '../config'
import {Pin} from './Pin'
import {setupButton} from './Button'

const setupPin = (pin: Pin) => {
  switch (pin.type) {
  case 'button': return setupButton(pin)
  }
}

export const setupPins = () => {
  config().pins.forEach(setupPin)
}
