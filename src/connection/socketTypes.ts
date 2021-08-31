export interface Options {
    port: string;
    secret?: string;
    baudrate?: number;
    socketAddress?: string;
    socketPort?: number;
    controllerType?: string;
    accessTokenLifetime?: string;
  }
  
  export interface Socket {
    emit: (event: string, ...args: any) => boolean;
  }