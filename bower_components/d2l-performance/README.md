# d2l-performance
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

Wrapper and polyfill for browser navigation API performance methods.

## Installation

`d2l-performance` can be installed from [Bower][bower-url]:
```shell
bower install d2l-performance
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the component or scripts as needed.

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-performance/d2l-performance.html">
</head>
```

#### Methods

```javascript
// create a performance marker with the specified name
D2L.Performance.mark(name);

// create a performance measure with the specified name, and optionally start & end marker names.
D2L.Performance.measure(name, startMark, endMark);
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-performance
[bower-image]: https://img.shields.io/bower/v/d2l-performance.svg
[ci-url]: https://travis-ci.org/Brightspace/d2l-performance-ui
[ci-image]: https://travis-ci.org/Brightspace/d2l-performance-ui.svg?branch=master