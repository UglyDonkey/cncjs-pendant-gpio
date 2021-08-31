export interface LogAction {
  type: 'log';
  message: string;
}

export function setupLog({message}: LogAction) {
  return () => console.log(message)
}
