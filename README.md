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

#### Frontend demo 

A simple frontend created with Vue.js using a reiterative component as tree display.


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
