**Looking for the pre-Daylight `brightspace-integration`?** It's [over here](https://github.com/Brightspace/brightspace-integration/tree/daylight-off).

# brightspace-integration

[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

The goal of this project is to bring together many other external libraries and modules for inclusion into a particular build of Brightspace.

## Building

The first time you build, install dependencies:

```shell
npm install
```

Rebuild assets to the `dist` directory:

```shell
npm run build
```

### Troubleshooting on Windows

Building BSI in Windows doesn't always go smoothly. Here are some of the issues that have been encountered, and their potential solutions:

Trouble | Shooting
------------ | -------------
**build:icons fails:** ```cannot copy from `...'images\**\*.*'` to `...'images\**\*.*'`: cannot read from `...'images\**\*.*'`: ENOENT: no such file or directory, open '...'images\**\*.*''``` | remove single quotes from `package.json`.`scripts`.`build:icons`

## Running Locally

To test against a local Brightspace environment, first start serving the compiled assets:

```shell
npm run serve
```

This will run a web server on port `8080` pointing at the `dist` directory. You'll need to manually rebuild if any of the assets change.

To point your Brightspace instance at the local integration project:

1. Go to your `{instance}/config/Infrastructure` directory
2. Edit `D2L.LP.Web.UI.Bsi.config.json`
3. Change the `baseLocation` property to `http://localhost:8080/` (or your computer's hostname) - note the trailing `/`
4. Restart IIS

The config file will get overwritten during the build.

To install a new dependency or update an existing one:
1. If you haven't already, install `bower-locker` globally using `npm install -g bower-locker`
2. Unlock `bower.json` by running `bower-locker unlock`
3. Make changes to `bower.json` manually or via `bower install <component>`
4. Update dependencies in `bower_components` via `bower update` or by removing the directory and doing a fresh `bower install`
5. Lock `bower.json` again by running `bower-locker lock`
6. Inspect the diff to ensure the changes match your expectations

## Web Components

This project serves as an integration point for our web components and we are using [polymer-build](https://github.com/Polymer/polymer-build) to manage common dependencies between components.

To integrate a new web component into BSI, perform the following steps:

1. Unlock `bower.json` by following the instructions above for `bower-locker`
2. Reference your component as a bower dependency using the path to the repository plus a version tag (i.e. `bower install --save https://github.com/Brightspace/my-component.git#1.0.0`)
3. Add an HTML file (i.e. `d2l-my-component.html`) to the root of this project that references the new bower component. (i.e. `bower_components/my-component/my-component.html`)
4. Reference the new html file from the fragments list in the `polymer-build.js`

## Publishing

The project assets (`dist` directory) will be automatically published to the Brightspace CDN by its [Travis CI job](https://travis-ci.org/Brightspace/brightspace-integration) after each successful build of a tagged commit.

The publish location will be: `https://s.brightspace.com/lib/bsi/{version}/`

## Contributing
Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and
contributions should make use of them.

[ci-url]: https://travis-ci.org/Brightspace/brightspace-integration
[ci-image]: https://img.shields.io/travis/Brightspace/brightspace-integration.svg
[dependencies-url]: https://david-dm.org/Brightspace/brightspace-integration
[dependencies-image]: https://img.shields.io/david/Brightspace/brightspace-integration.svg
