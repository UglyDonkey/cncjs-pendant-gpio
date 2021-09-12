import * as fs from 'fs'
import * as path from 'path'
import {Config, defaultConfig} from './Config'

const getUserHome = () => process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']!

export const loadConfig = (params: Partial<Config>): Config => {
  try {
    const file = fs.readFileSync(path.resolve(getUserHome(), '.cncjs-pendant-gpio'))
    return {...defaultConfig, ...JSON.parse(file.toString('utf8')), ...params}
  } catch (error) {
    return {...defaultConfig, ...params}
  }
}
