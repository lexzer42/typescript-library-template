<h1 align="center">🚀</h1>
<h3 align="center">Typescript Library Skeleton</h3>

<p align="center">
    <a href="https://github.com/AlbertHernandez/typescript-library-skeleton/actions/workflows/nodejs.yml?branch=main"><img src="https://github.com/AlbertHernandez/typescript-library-skeleton/actions/workflows/nodejs.yml/badge.svg?branch=main" alt="nodejs"/></a>
</p>

<p align="center">
  Skeleton for new typescript libraries
</p>

## Table of Contents

* [Preparing environment to contribute](#preparing-environment)
* [Building](#building)
* [Testing](#testing)
* [Linting](#linting)
* [Coding standards](#coding-standards)

## Preparing environment to contribute

This library has been designed to work with node v16 and npm 8. In order to configure your local environment you can run:

```bash
nvm install 16.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```

## Coding standards

Make sure you have environment, that supports eslint / prettier.
The git hooks will ensure for violation of the standards.
