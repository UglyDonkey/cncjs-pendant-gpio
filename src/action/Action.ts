import {LogAction} from './LogAction'
import {GCodeAction} from './GCodeAction'

export type Action =
  | GCodeAction
  | LogAction
