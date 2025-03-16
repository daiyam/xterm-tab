[@daiyam/xterm-tab-headless](https://github.com/daiyam/xterm-tab)
=================================================================

⚠ This package is experimental

`@daiyam/xterm-tab-headless` is a headless terminal that can be run in node.js. This is useful in combination with the frontend [`@daiyam/xterm-tab`](https://github.com/daiyam/xterm-tab) for example to keep track of a terminal's state on a remote server where the process is hosted.

## Getting Started

First, you need to install the module, we ship exclusively through npm, so you need that installed and then add xterm.js as a dependency by running:

```sh
npm install @daiyam/xterm-tab-headless
```

Then import as you would a regular node package. The recommended way to load `@daiyam/xterm-tab-headless` is with TypeScript and the ES6 module syntax:

```javascript
import { Terminal } from '@daiyam/xterm-tab-headless';
```

## API

The full API for `@daiyam/xterm-tab-headless` is contained within the [TypeScript declaration file](https://github.com/daiyam/xterm-tab/blob/master/typings/@daiyam/xterm-tab-headless.d.ts), use the branch/tag picker in GitHub (`w`) to navigate to the correct version of the API.

Note that some APIs are marked *experimental*, these are added to enable experimentation with new ideas without committing to support it like a normal [semver](https://semver.org/) API. Note that these APIs can change radically between versions, so be sure to read release notes if you plan on using experimental APIs.

### Addons

Addons in `@daiyam/xterm-tab-headless` work the [same as in `xterm`](https://github.com/daiyam/xterm-tab/blob/master/README.md#addons) with the one caveat being that the addon needs to be packaged for node.js and not use any DOM APIs.

Currently no official addons are packaged on npm.
