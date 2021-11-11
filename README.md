# nodejs app template

This project uses `npm workspaces` to separate each part of project. So, each
part can be copied to other projects and accoplished as module in another
project.

## Requirements

- `nodejs` >= v17
- `npm` >= 8
- `git` >= 2.25.1

## Install dependencies

Use default nodejs install approach.

```sh
npm install
```

## Start the application

Use default nodejs start approach, it starts as `node index.js`.

```sh
npm start
```

In development mode, you can use `nodemon` dependency to run the application.

```sh
npx nodemon
```

It assumes the default port `3000` but it can be changed using the environment
`PORT` variable.

```sh
PORT=8080 npm start
```

## Don't use require(...)

Instead use `import` statement. It is part of javascript language spec and
`require` is not. All `package.json` (in root and each workspaces) files
contains the property `"type": "module"` to provide this feature, so all `.js`
files will use this pattern.

Examples:

```js
import Koa from 'koa';
import * as app from './app/index.js';
import { authorization } from './service/authorization/index.js';
```

## Release

Use npm release script in `main` branch to update CHANGELOG.md, package.json,
package-lock.json, commit it and generate tag version.

```sh
npm run release
```
