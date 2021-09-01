cncjs-pendant-gpio
==================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cncjs-pendant-gpio.svg)](https://npmjs.org/package/cncjs-pendant-gpio)
[![Downloads/week](https://img.shields.io/npm/dw/cncjs-pendant-gpio.svg)](https://npmjs.org/package/cncjs-pendant-gpio)
[![License](https://img.shields.io/npm/l/cncjs-pendant-gpio.svg)](https://github.com/UglyDonkey/cncjs-pendant-gpio/blob/master/package.json)

Configurable gpio pendant for [cncjs](https://github.com/cncjs/cncjs)

* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)

# Installation
```shell
npm install -g cncjs-pendant-gpio
```

# Usage
```shell
cncjs-pendant-gpio PORT
```
`PORT` - port of your controller

# Configuration

cncjs-pendant-gpio loads json configuration from `~/cncjs-pendant-gpio`

- [debounceTimeout](#debouncetimeout)
- [pin](#pin)
- [action](#action)

## Example
```json
{
  "pins": [{
    "type": "button", 
    "gpio": 4, 
    "edge": "rising", 
    "actions": [{
      "type": "log", 
      "message": "STOP"
    },{
      "type": "gcode",
      "gcode": "!"
    }]
  },{
    "type": "button",
    "gpio": 3,
    "edge": "rising",
    "actions": [{
      "type": "gcode",
      "gcode": "$H"
    }]
  }],
  "debounceTimeout": 20
}
```

## debounceTimeout
Default is 20 ms

## pin
Every pin is described as an object. Field `type` defines type of pin.

### Available types

#### button
|field|description|default value|required|
|---|---|---|---|
|type|should be `"button"`|`"button"`|`true`|
|gpio|gpio pin number| |`true`|
|edge|`"rising"`, `"falling"`, `"both"`| |`true`|
|actions|array of [actions](#action)| |`true`|

## action
Every action is described as an object. Field `type` defines type of action.

### Available types

### log
Log message to standard output

|field|description|default value|required|
|---|---|---|---|
|type|should be `"log"`|`"log"`|`true`|
|message|whatever you want to see in logs| |`true`|

### gcode
Send gcode to controller

|field|description|default value|required|
|---|---|---|---|
|type|should be `"gcode"`|`"gcode"`|`true`|
|gcode|gcode command| |`true`|
