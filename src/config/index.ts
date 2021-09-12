import {Config, defaultConfig} from './Config';
import {loadConfig} from './loadConfig'

let config = defaultConfig;

export const setupConfig = (params: Partial<Config>) => {
    config = loadConfig(params)
}

const getConfig = () => config;

export default getConfig;
