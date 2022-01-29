# CycAI Home challenge

This project was created with purpose to take a home challenge by CycAI

## Requirement

Implement a code editor using `CodeMirror` on React. User can do the following thing with the code editor:

1. User can write simple python script in the `Code Panel`.
2. There is a `Run button` for user to run the script.
3. When the script is run, code will be sent to backend and is executed on python environment. 
4. The output of the run is displayed to the user in the front-end in `Output Panel`.

## Built With
- Client: React / Typescript / SASS
- Server: Express / Typescript / Python-shell


## Getting Started

### Prerequisites

- First make sure you are ***able to run python3*** from the terminal
- Make sure you already installed ***NodeJS & NPM***.
- Go to the `client` folder, create `.env` file then add variable below (Base server endpoints):
```REACT_APP_SERVER_BASE_URL=http://localhost:4000```

### Instalation
Go to the `client`folder, run installation script
 `
npm install
 `

 Go to the `server` folder, run installation script
 `
npm install
 `

### Usage

#### Run client application
Runs the client application in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`
npm run start
`
#### Run server

Runs the server in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

 `
npm run start
 `

