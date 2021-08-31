import {Command, flags} from '@oclif/command'
import {setupPins} from './pin/setupPins'
import {setupConnection} from './connection/connection'

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

  static args = [{name: 'port', required: true}]

  async run() {
    const {args: {port}, flags} = this.parse(CncJsPendantGpio)
    await setupConnection({port, ...flags})
    setupPins()
  }
}

export = CncJsPendantGpio
