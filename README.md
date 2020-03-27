# Node ES Modules with TypeScript

Latest Typescript and Node - as bare-bone as possible example app

I wanted to start a simple Node project where I can install the latest things I want and using as little compilation from Typescript as possible.

I remembered Node announced [Node 13 support ESModules without experimental flags](https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663), checked out the [official documentation](https://nodejs.org/api/esm.html) but couldn't find a simple bare bone example, so maybe that would help someone.

I've committed the dist folder as well to see how the output from Typescript.

Would love suggestions on how to make it better or to point to a better example!

## What I've done (so you can tell me what I should have done...)

### Node (package.json)

- `type: module`: Tell Node that `.js` files are ES Modules
- `--es-module-specifier-resolution=node`: By default, Node wants file extensions in import but [TypeScript doesn't include file extension in it's output](https://github.com/microsoft/TypeScript/issues/16577). so this enable automatic extension resolution in Node.

### TypeScript (tsconfig.json)

- `"module": "esnext"`: Make Typescript output ES Modules
- `"target": "es2020"`: Highest target (from `3.8.0-beta`)

## Run app

1. Install latest Node (Notice that I've placed the `engines` field on `package.json` so try to make sure you have the exact version or simply delete it from `package.json`
2. Install dependencies - `yarn`
3. Compile with `tsc -w` and run Node with `nodemon` - `yarn dev`
4. You can also use `yarn compile` and `yarn start` separately

## Want to import from a commonjs package?

Here is a branch of the example with including a commonjs pacakge (`pg`):

https://github.com/Urigo/typescript-node-es-modules-example/commit/98304173e964713955be3a92b4e355a857376dca

> The [renovate.json](https://github.com/Urigo/typescript-node-es-modules-example/blob/master/renovate.json) file has nothing to do with the project itself. It's a file to activate [RenovateBot](https://github.com/renovatebot/renovate) to automatically PR this repository when a new version of any dependency of that project has been published
