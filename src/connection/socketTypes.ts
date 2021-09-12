export interface Options {
    secret?: string;
    baudrate?: number;
    socketAddress?: string;
    socketPort?: number;
    controllerType?: string;
    accessTokenLifetime?: string;
  }
  
  export interface Socket {
    on: (event: string, callback: (data: any) => void) => void;
    emit: (event: string, ...args: any) => boolean;
  }