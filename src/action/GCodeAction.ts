export interface GCodeAction {
  type: 'gcode';
  gcode: string;
}

export const setupGCode = ({gcode}: GCodeAction) => {
  return () => console.log(`gcode: ${gcode}`)
}
