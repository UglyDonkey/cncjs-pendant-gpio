import {Action} from '../action/Action'
import {Edge} from 'onoff'

export interface Button {
  type: 'button';
  gpio: number;
  edge: Edge;
  actions: Action[];
}

export type Pin =
  | Button
