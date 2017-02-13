# Screeps - ESLint Shareable Config

[![Build status][travis-ci-badge]][travis-ci] [![npm][npm-badge]][npm]

A [ESLint][eslint] [shareable config][shareable-configs] for [Screeps][screeps]. A valid
robot is a happy robot.

## Install

```
npm install eslint-config-screeps-neat-o
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc`
files. For example:

```
{
    "extends": "screeps-neat-o"
}
```

## Features

- Globals, parsed directly from the API reference

[travis-ci]: https://travis-ci.org/langri-sha/eslint-config-screeps-neat-o
[travis-ci-badge]: https://travis-ci.org/langri-sha/eslint-config-screeps-neat-o.svg?branch=master
[npm]: https://www.npmjs.com/package/eslint-config-screeps-neat-o
[npm-badge]: https://img.shields.io/npm/v/eslint-config-screeps-neat-o.svg

[screeps]: https://screeps.com/
[eslint]: http://eslint.org/
[shareable-configs]:http://eslint.org/docs/developer-guide/shareable-configs
