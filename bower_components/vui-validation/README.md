# vui-validation

[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com) and CSS for styling validation messages.

## Installation

`vui-validation` can be installed from [Bower][bower-url]:
```shell
bower install vui-validation
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-validation
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-validation/validation.scss';
// or...
@import "node_modules/vui-validation/validation.scss";
```

## Usage

**Bubbles:**

Bubbles are intended to be displayed on focus.  In the follwing example, the consumer would apply the `bubble-show` class to display the bubble.


```html
<input type="text" aria-invalid="true" aria-describedby="validation-message" />
<div id="validation-message" class="bubble bubble-show">
	<span>A validation message.</span>
</div>
```

```scss
.bubble {
	@include vui-validation-bubble;
}

.bubble-show {
	@include vui-validation-bubble-show;
}

.bubble > span {
	@include vui-validation-bubble-content;
}

```
Bubbles can also be displayed above content.


```html
<div id="validation-message" class="bubble-above bubble-show">
	<span>A validation message.</span>
</div>
<input type="text" aria-invalid="true" aria-describedby="validation-message" />
```

```scss
.bubble-above {
	@include vui-validation-bubble;
}

.bubble-show {
	@include vui-validation-bubble-show;
}

.bubble-above > span {
	@include vui-validation-bubble-content-above;
}

```

**Important:** form elements should be marked up to provide validation information that is available to assistive technology, for example, by using `aria-invalid`, `aria-required`, and `aria-describedby`.

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-validation
[bower-image]: https://img.shields.io/bower/v/vui-validation.svg
[npm-url]: https://www.npmjs.org/package/vui-validation
[npm-image]: https://img.shields.io/npm/v/vui-validation.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-validation
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-validation.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-validation
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-validation.svg
