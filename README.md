<p align="center">
  <a href="https://expressjs.com/" target="blank"><img src="images/typescript.png" alt="Express Logo" width="512" /></a>
</p>

<h1 align="center">⭐ Typescript Library Template ⭐</h1>

<p align="center">
  Template for new libraries based on Typescript with the Best Practices and Ready for Production
</p>

<p align="center">
  <a href="https://github.com/AlbertHernandez/typescript-library-template/actions/workflows/node.yml?branch=main"><img src="https://github.com/AlbertHernandez/typescript-library-template/actions/workflows/node.yml/badge.svg?branch=main" alt="nodejs"/></a>
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.x-green.svg" alt="node"/></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/supported_node-18.x_--_20.x-forestgreen.svg" alt="supported node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-10.x-red.svg" alt="npm"/></a>
  <a href="https://swc.rs/"><img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Dockerized 🐳_-blue.svg" alt="docker"/></a>
</p>

## 👀 Motivation

Starting a new library for NodeJS can be a bit frustrating, there are a lot of things to consider if we want to have a really good starting point where later we can iterate.

The main objective of this template is to provide a good base configuration for our NodeJS libraries that we can start using and move to production as soon as possible.

## 🌟 What is including this template?

1. 🐳 Fully dockerized project ready to develop in the library.
2. 👷 Use [SWC](https://swc.rs/) for compiling and running the tests of the library.
3. 🐶 Integration with [husky](https://typicode.github.io/husky/) to ensure we have good quality and conventions while we are developing like:
   - 💅 Running the linter over the files that have been changed
   - 💬 Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure our commits have a convention.
   - ✅ Run the tests automatically.
   - ⚙️ Check our library does not have type errors with Typescript.
4. 🧪 Testing with [Jest](https://jestjs.io/es-ES/).
5. 📌 Custom path aliases, where you can define your own paths (you will be able to use imports like `@src` instead of `../../../src`).

## 🤩 Other templates

Are you thinking in start some new service in the NodeJS ecosystem? If you like this template there are others base on this you can check:

- [Template for new Typescript Express Services](https://github.com/AlbertHernandez/express-typescript-service-template)
- [Template for new NestJS Services](https://github.com/AlbertHernandez/nestjs-service-template)

## 🧑‍💻 Developing

The library is fully dockerized 🐳, if we want to start the app in **development mode**, we just need to run:

```bash
docker-compose up -d
```

This development mode with work with **hot-reload** and exposing a **debug port**, the `9229`, so later we can connect from our editor to it.

Now, you should be able to start debugging configuring using your IDE. For example, if you are using vscode, you can create a `.vscode/launch.json` file with the following config:

```json
{
  "version": "0.1.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to docker",
      "restart": true,
      "port": 9229,
      "remoteRoot": "/project"
    }
  ]
}
```

When you want to stop developing, you can stop the project running:

```bash
docker-compose down
```

## ⚙️ Building

```bash
npm run build
```

## ✅ Testing

If you want to run the tests of the project, you can execute the following command:

```bash
npm run test
```

## 💅 Linting

To run the linter you can execute:

```bash
npm run lint
```

And for trying to fix lint issues automatically, you can run:

```bash
npm run lint:fix
```
