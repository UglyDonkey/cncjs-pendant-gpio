import {getConnection} from '../connection/connection'

export interface GCodeAction {
  type: 'gcode';
  gcode: string;
}

export const setupGCode = ({gcode}: GCodeAction) => {
  const connection = getConnection()
  return () => connection.sendGcode(gcode)
}
