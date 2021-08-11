# NPMRegistry Package Dependencies

> npm dependencies tree

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/install/folder
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Microservice used to retrieve the dependencies tree of a NPM package

This is a simple microservice to inspect a NPM package dependencies. At first query creates a tree with 2 levels dependencies. 

Example: socket.io - 4.1.3

```

{
    "name": "socket.io",
    "version": "4.1.3",
    "description": "node.js realtime framework server",
    ...
    "dependencies": {
        "@types/cookie": {
            "version": "^0.4.0",
            "isValid": ">=0.4.0 <0.5.0-0",
            "dependencies": {}
        },
        "@types/cors": {
            "version": "^2.8.10",
            "isValid": ">=2.8.10 <3.0.0-0",
            "dependencies": {}
        },
        "@types/node": {
            "version": ">=10.0.0",
            "isValid": ">=10.0.0",
            "dependencies": {}
        },
        "accepts": {
            "version": "~1.3.4",
            "isValid": ">=1.3.4 <1.4.0-0",
            "dependencies": {
                "mime-types": "~2.1.16",
                "negotiator": "0.6.1"
            }
        },
        "base64id": {
            "version": "~2.0.0",
            "isValid": ">=2.0.0 <2.1.0-0",
            "dependencies": null
        },
        "debug": {
            "version": "~4.3.1",
            "isValid": ">=4.3.1 <4.4.0-0",
            "dependencies": {
                "ms": "2.1.2"
            }
        },
        "engine.io": {
            "version": "~5.1.1",
            "isValid": ">=5.1.1 <5.2.0-0",
            "dependencies": {
                "accepts": "~1.3.4",
                "base64id": "2.0.0",
                "cookie": "~0.4.1",
                "cors": "~2.8.5",
                "debug": "~4.3.1",
                "engine.io-parser": "~4.0.0",
                "ws": "~7.4.2"
            }
        },
        "socket.io-adapter": {
            "version": "~2.3.1",
            "isValid": ">=2.3.1 <2.4.0-0",
            "dependencies": null
        },
        "socket.io-parser": {
            "version": "~4.0.4",
            "isValid": ">=4.0.4 <4.1.0-0",
            "dependencies": {
                "@types/component-emitter": "^1.2.10",
                "component-emitter": "~1.3.0",
                "debug": "~4.3.1"
            }
        }
    },
    ...

```

#### Service :

```
http://localhost:3030/npmregistry?name=package_name&version=package_version 

```

#### Hook

```
./src/hooks/npmregistry.ts
```

#### Package Version

Service will use ```semver``` package to follow the Semantic Versioning specification thru the function :

```
 semver.minVersion(version)
```

#### Backend Demo (Heroku Dyno)

[DEMO](https://npmdep.herokuapp.com/npmregistry?name=socket.io&version=4.1.3)

#### Frontend demo 

A simple frontend created with Vue.js using a reiterative component as tree display.
[Frontend Demo Vue](https://vue-npmpackage.vercel.app/)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.


## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
