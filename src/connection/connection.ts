import setupSocket = require('./socket')
import {promisify} from 'util'
import {Options, Socket} from './socketTypes'

class Connection {
  private readonly socket: Socket

  private readonly port: string

  constructor(socket: Socket, port: string) {
    this.port = port
    this.socket = socket
  }

  sendGcode(gcode: string) {
    this.socket.emit('write', this.port, `${gcode}\n`)
  }
}

let connection: Connection

export const setupConnection = async (options: Options) => {
  const socket = await promisify(setupSocket)(options)
  connection = new Connection(socket, options.port)
}

export const getConnection = () => connection
