import setupSocket = require('./socket')
import {promisify} from 'util'
import {Socket} from './socketTypes'
import {Port} from './Port'
import config from '../config'

class Connection {
  private readonly socket: Socket

  private port?: string

  constructor(socket: Socket) {
    this.socket = socket
    this.setupListeners()
    this.setupPort()
  }

  sendGcode(gcode: string) {
    if(!this.port) {
      return
    }
    this.socket.emit('write', this.port, `${gcode}\n`)
  }

  private setupPort() {
    const {port} = config()

    if(port) {
      this.openPort(port)
    }

    this.socket.emit('list')
  }

  private openPort(port: string) {
    this.socket.emit('open', port, {
      baudrate: config().baudrate,
      controllerType: config().controllerType,
    })
  }

  private closePort() {
    console.log(`Port '${this.port}' was closed`)
    this.port = undefined
  }

  private setupListeners() {
    this.socket.on('serialport:open', ({port}: Port) => {
      console.log(`Connected to controller '${port}'`)
      this.port = port
    })

    this.socket.on('serialport:list', (ports: Port[]) => {
      const port = ports.find(port => port.inuse)?.port
      if(!port) {
        console.log('There is no port in use. Please use cncjs app to open a connection and I will immediatly connect to that port. If you need to set port manualy please refer to documentation https://github.com/UglyDonkey/cncjs-pendant-gpio#port')
        return
      }

      this.openPort(port)
    })
    this.socket.on('serialport:change', ({port, inuse}: Port) => {
      if(port === this.port && !inuse) {
        this.closePort()
      } else if(
        (!config().port && !this.port && inuse) ||
        (config().port === port && inuse)
        ) {
        this.openPort(port)
      }
    })
  }
}

let connection: Connection

export const setupConnection = async () => {
  const socket = await promisify(setupSocket)(config())
  connection = new Connection(socket)
}

export const getConnection = () => connection
