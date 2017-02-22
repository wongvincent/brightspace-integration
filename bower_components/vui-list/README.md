# vui-list
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [SASS mixins](http://sass-lang.com/) and CSS that you can use to style lists.

There are three styles of lists.

| With Separators | Without Separators | Compact |
| --------------- | ------------------ | ------- |
| ![screenshot of list with separators](/screenshots/separated.png) | ![screenshot of list without separators](/screenshots/unseparated.png)| ![screenshot of compact list](/screenshots/compact.png) |

## Installation

`vui-list` can be installed from [Bower][bower-url]:
```shell
bower install vui-list
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-list
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-list/list.scss';
@import 'bower_components/vui-list/list-item.scss';
// or...
@import "node_modules/vui-list/list.scss";
@import "node_modules/vui-list/list-item.scss";
```

## Usage

A list can be either a `<ol>` or `<ul>` HTML element containing any number of `<li>` elements. The default list style is with separators.

HTML:
```html
<ol>
	<li>Gold</li>
	<li>Silver</li>
	<li>Bronze</li>
</ol>
```

SCSS:
```scss
ol {
	@include vui-list;
}
```

To style a list with no separators or a compact list, add the appropriate mixin.

HTML:
```html
<ol>
	<li>First Unseparated Item</li>
	<li>Last Unseparated Item</li>
</ol>

<ul>
	<li>Compact Item A</li>
	<li>Compact Item B</li>
<ul>
```

```scss
ol {
	@include vui-list;
	@include vui-list-no-separator;
}

ul {
	@include vui-list;
	@include vui-list-compact;
}
```

To style an individual list item as active, selected, or both, add the appropriate mixin to the list item.

HTML:
```html
<ol>
	<li class="selected">Gold</li>
	<li class="active">Silver</li>
	<li class="selected-active">Bronze</li>
</ol>
```

SCSS:
```scss
.selected {
	@include vui-list-item-selected;
}
.active {
	@include vui-list-item-active;
}
.selected-active {
	@include vui-list-item-selected-active;
}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-list
[bower-image]: https://img.shields.io/bower/v/vui-list.svg
[npm-url]: https://npmjs.org/package/vui-list
[npm-image]: https://img.shields.io/npm/v/vui-list.svg
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-list.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-list
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-list
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-list.svg
