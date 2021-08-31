import {Action, ConsoleLogAction, GCodeAction} from './Action'

function setupConsole({message}: ConsoleLogAction) {
  return () => console.log(message)
}

function setupGCode({gcode}: GCodeAction) {
  return () => console.log(`gcode: ${gcode}`)
}

const setupAction = (action: Action): Function => {
  switch (action.type) {
  case 'console': return setupConsole(action)
  case 'gcode': return setupGCode(action)
  }
}

export const setupActions = (actions: Action[]) => {
  const callbacks = actions.map(setupAction)

  return () => callbacks.forEach(callback => callback())
}
