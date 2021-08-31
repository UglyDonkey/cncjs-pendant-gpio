import {Pin} from '../pin/Pin'

export interface Config {
  pins: Pin[];
  debounceTimeout: number;
}

export const defaultConfig: Config = {
  pins: [],
  debounceTimeout: 20,
}
