import {Pin} from '../pin/Pin'

export interface Config {
  pins: Pin[];
  debounceTimeout: number;
  port?: string;
  secret?: string;
  baudrate?: number;
  socketAddress: string;
  socketPort: number;
  controllerType?: string;
  accessTokenLifetime: string;
}

export const defaultConfig: Config = {
  pins: [],
  debounceTimeout: 20,
  socketAddress: 'localhost',
  socketPort: 8000,
  accessTokenLifetime: '30d',
}
