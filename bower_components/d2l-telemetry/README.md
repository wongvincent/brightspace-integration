# d2l-telemetry
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

Wrapper and polyfill for browser navigation API telemetry methods.

## Installation

`d2l-telemetry` can be installed from [Bower][bower-url]:
```shell
bower install d2l-telemetry
```

## Usage

```html
<head>
	<script src="../d2l-telemetry/d2l-telemetry.js"></script>
</head>
```

#### Methods

```javascript
// initialize telemetry
D2L.Telemetry.init(telemetryEndpoint, LMSVersion, userId);

// send generic analytics event to telemetry service
D2L.Telemetry.send(jsonData);

// send pageView analytics event to telemetry service
D2L.Telemetry.sendPageview();

// send timing analytics event to telemetry service.
D2L.Telemetry.sendPerformance(D2L.Performance.getEntriesByName('foo'));
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-telemetry
[bower-image]: https://img.shields.io/bower/v/d2l-telemetry.svg
[ci-url]: https://travis-ci.org/Brightspace/d2l-telemetry
[ci-image]: https://travis-ci.org/Brightspace/d2l-telemetry.svg?branch=master
