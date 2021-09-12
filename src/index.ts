import {Command, flags} from '@oclif/command'
import {setupPins} from './pin/setupPins'
import {setupConnection} from './connection/connection'
import {setupConfig} from './config'

class CncJsPendantGpio extends Command {
  static description = 'cncjs pendant gpio'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    secret: flags.string(),
    baudrate: flags.integer(),
    socketAddress: flags.string(),
    socketPort: flags.integer(),
    controllerType: flags.string(),
    accessTokenLifetime: flags.string(),
  }

  static args = [{name: 'port', required: false}]

  async run() {
    const {args: {port}, flags} = this.parse(CncJsPendantGpio)
    setupConfig({port, ...flags})
    await setupConnection()
    setupPins()
  }
}

export = CncJsPendantGpio
