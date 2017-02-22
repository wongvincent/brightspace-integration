# vui-breadcrumbs
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [SASS mixins](http://sass-lang.com/) and CSS that you can use to style breadcrumbs.

![screenshot of image actions](/screenshots/sample.png)

## Installation

Install from NPM:
```shell
npm install vui-breadcrumbs
```

Install from Bower:
```shell
bower install vui-breadcrumbs
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-breadcrumbs/breadcrumbs.scss';
// or...
@import "node_modules/vui-breadcrumbs/breadcrumbs.scss";
```

## Usage

Use a `<ol>` HTML element to represent breadcrumbs. Each breadcrumb should be a `<li>` child element of the `<ol>`.

HTML:
```html
<ol>
	<li>Root</li>
	<li>Node</li>
	<li>Leaf</li>
</ol>
```

SCSS:
```scss
ol {
	@include vui-breadcrumbs;
}
```

Any of the breadcrumbs in a group that uses a `<a>` tag will be styled as a link.

HTML:
```html
<ul>
	<li><a href="#">Root</a></li>
	<li><a href="#">Node</a></li>
	<li>Leaf</li>
</ul>
```

SCSS:
```scss
ul {
	@include vui-breadcrumbs;
}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-breadcrumbs
[bower-image]: https://img.shields.io/bower/v/vui-breadcrumbs.svg
[npm-url]: https://www.npmjs.org/package/vui-breadcrumbs
[npm-image]: https://img.shields.io/npm/v/vui-breadcrumbs.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-breadcrumbs
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-breadcrumbs.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-breadcrumbs
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-breadcrumbs.svg
