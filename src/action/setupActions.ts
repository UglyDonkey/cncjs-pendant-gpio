import {Action} from './Action'
import {setupLog} from './LogAction'
import {setupGCode} from './GCodeAction'

const setupAction = (action: Action): Function => {
  switch (action.type) {
  case 'log': return setupLog(action)
  case 'gcode': return setupGCode(action)
  }
}

export const setupActions = (actions: Action[]) => {
  const callbacks = actions.map(setupAction)

  return () => callbacks.forEach(callback => callback())
}
