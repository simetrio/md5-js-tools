md5-js-tools
=========

[![NPM Version](http://img.shields.io/npm/v/md5-js-tools.svg?style=flat)](https://www.npmjs.com/package/md5-js-tools)

Generate md5 hashes

## Demo

[Online MD5 Generator](https://www.olrix.net/tools/md5-generator/)

## With npm

### Install

```shell
$ npm install --save md5-js-tools
```

### Import

```javascript
import { MD5 } from "md5-js-tools";
```

or

```javascript
const { MD5 } = require("md5-js-tools");
```

## In web browsers 

```javascript
<script src="md5.min.js"></script>
```

or

```javascript
<script src="https://cdn.jsdelivr.net/gh/simetrio/md5-js-tools@1.0.0/md5.min.js"></script>
```

## Usage

```javascript
MD5.generate("cew&^*542dew#$#");    //  134063d4ece635c28103ab3686dd738b
```