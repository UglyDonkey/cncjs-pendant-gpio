export interface GCodeAction {
  type: 'gcode';
  gcode: string;
}

export interface ConsoleLogAction {
  type: 'console';
  message: string;
}

export type Action =
  | GCodeAction
  | ConsoleLogAction
