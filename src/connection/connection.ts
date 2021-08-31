import setupSocket, {Options, Socket} from './socket'
import {promisify} from 'util'

class Connection {
  private readonly socket: Socket

  private readonly port: string

  constructor(socket: Socket, port: string) {
    this.port = port
    this.socket = socket
  }

  sendGcode(gcode: string) {
    this.socket.emit('write', this.port, gcode)
  }
}

let connection: Connection

export const setupConnection = async (options: Options) => {
  const socket = await promisify(setupSocket)(options)
  connection = new Connection(socket, options.port)
}

export const getConnection = () => connection
