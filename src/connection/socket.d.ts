import {Options, Socket} from './socketTypes'

declare const setupSocket: (options: Options, callback: (error: Error | null, socket: Socket) => void) => void

export = setupSocket
