# Bauer Robot Test

> This project is an [isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
> web application (SPA) based on Facebook's [React](https://facebook.github.io/react/)
> library and [Flux](http://facebook.github.io/flux/) architecture.
> bootstraped with [RSK](https://github.com/kriasoft/react-starter-kit).

**Demo**: https://lit-wildwood-2229.herokuapp.com/

### What you'll find in here

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content
│   ├── /core/                  # Core components (Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /templates/             # HTML templates for server-side rendering
│   ├── /utils/                 # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│   └── /server.js              # Server-side startup script
│── gulpfile.js                 # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
│── preprocessor.js             # ES6 transpiler settings for Jest
└── webpack.config.js           # Webpack configuration for bundling and optimization
```

### Getting Started

```shell
$ git clone https://github.com/lucasschejtman/mr_roboto
$ cd mr_roboto
$ npm install -g gulp
$ npm install
```

### How to Build

This is using the new babel convetion for gulp. In case of having gulp installed and getting a 'missing gulpfile' error update your global gulp

```shell
$ npm update -g gulp
```

```shell
$ gulp build
```

By default, it builds in debug mode. If you need to build in release mode, add
`--release` flag.

### How to Run

```shell
$ gulp
```

This will start a lightweight development server with LiveReload and
synchronized browsing across multiple devices and browsers.
