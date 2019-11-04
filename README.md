# TivoMatchingTool

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.


## Development server

#Docker Sinopia for local NPM Repo
first `npm install`

acron-ot-libs project do

https://www.docker.com/products/docker-desktop

https://github.com/kfatehi/docker-sinopia

docker pull keyvanfatehi/sinopia:latest
docker run --name sinopia -d -p 4873:4873 keyvanfatehi/sinopia:latest
npm set registry http://localhost:4873/

`ng build`
`npm publish`

docker stop sinopia
docker run --volumes-from sinopia -it --rm ubuntu vi /opt/sinopia/config.yaml
docker start sinopia

@echo off
npm config set registry https://registry.npmjs.org/

`npm i -g npm`

`ng serve --proxy-config proxy.conf.json`

`ng build --prod --build-optimizer --vendor-chunk`

`ng build --prod --base-href http://targetdomain.com/somepath/`


`proprojects/appworks-platform-accelerator-lib/src/acron-appworks-accelerator/lib/acron-ui/config.ts`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##bundle analysis
`webpack-bundle-analyzer ./dist/stats.json`
