# Pharos
>A community driven, mobile awareness application
that delivers real-time event notifications based on your interests and location.

### Pharos Login
<img src="readme/readme.png" alt="Pharos mockup login" height=600 />

### Pharos Homepage
<img src="readme/readme1.png" alt="Pharos mockup 1" height=600 />

### Pharos Notification Menu
<img src="readme/readme2.png" alt="Pharos mockup 2" height=600 />

## Team

  - [Craig Dearden] - (https://github.com/cdearden)
  - [Efe Surekly]   - (https://github.com/efesurekli)
  - [Michael Dai]   - (https://github.com/michaelbdai)
  - [Sean O'Neal]   - (https://github.com/sean-oneal)

## Table of Contents

1. [Tech Stack](#techstack)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Tech Stack
This application was built using the following technologies:
- React-Native
- Redux
- Redux Saga
- PostgreSQL
- PostGIS
- Express
- Socket.io
- Sequelize
- bCrypt
- JWT

## Requirements

- Node 6.9.x
- Postgresql 9.1.x
- PostGIS 2.2.x
- React-Native CLI

iOS Simulation:
- Xcode 8.2.x


## Development

### Installing Dependencies

From within the root directory:
```sh
npm install
```

Populate Data

### Launching App Simulator

From within the root directory:

Build the Database
```sh
npm run startDb
npm run buildDb
npm run populateDb
```

Start the Server
```sh
npm run startServer
```

Launch App in Simulator
```sh
npm run startApp
```

Clearing the Database

```sh
npm run dropDb
npm run buildDb
```

##Testing

Server Test
```sh
npm run testServer
```

Database Test
```sh
npm run testDb
```

## Roadmap

###

View the product roadmap [here](https://github.com/LuminousLeeks/Pharos/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
