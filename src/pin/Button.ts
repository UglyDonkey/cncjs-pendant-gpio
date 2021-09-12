import {Edge, Gpio} from 'onoff'
import {Action} from '../action/Action'
import {setupActions} from '../action/setupActions'
import config from '../config'

export interface Button {
  type: 'button';
  gpio: number;
  edge: Edge;
  actions: Action[];
}

export const setupButton = ({actions, gpio, edge}: Button) => {
  const callback = setupActions(actions)

  const button = new Gpio(gpio, 'in', edge, {debounceTimeout: config().debounceTimeout})
  button.watch(callback)
}
