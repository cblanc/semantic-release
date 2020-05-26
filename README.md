![Release](https://github.com/cblanc/semantic-release/workflows/Release/badge.svg)
![CI](https://github.com/cblanc/semantic-release/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/%40cablanchard%2Fsemantic-release.svg)](https://badge.fury.io/js/%40cablanchard%2Fsemantic-release)

# Semantic Release Config

## Usage

For git only releases

```json
"release": {
  "extends": "@cablanchard/semantic-release"
},
```

For git + npm releases

```json
"release": {
  "extends": "@cablanchard/semantic-release/dist/npm"
},
```

## Licence

MIT
