# React photos

A react photo browsing app. The gallery view will display a grid of photos.
There is a pagination feature that allows the user to load more of them.

Selecting a photo in the grid navigates to the photo view displaying a larger
view of that photo and its title.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes
on how to deploy the project on a live system.

### Prerequisites

```
Node 12.16.1
NPM 6.13.4
```

### Install

Clone the repository and install the project.

```
1. git clone git@github.com:jraisanen/react-photos.git
2. cd react-photos
3. npm install
```

Run the app locally.

```
npm start
```

## Test

Run all tests.

```
npm test
```

## Lint

Lint all source files.

```
npm run lint
```

Lint eslint and stylelint separately.

```
npm run lint:es
npm run lint:style
```

## Deploy

Build the app and upload the contents of the generated build folder to your
server.

```
npm run build
```

## License

[MIT](LICENSE)
