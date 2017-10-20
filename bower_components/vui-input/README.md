# vui-input
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com/) and CSS which can be used to style different types of HTML input elements (text, checkboxes, radios, selects and textareas).

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-input` can be installed from [Bower][bower-url]:
```shell
bower install vui-input
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-input
```

## Usage

To style each type of input, first include its `SCSS` file from either `bower_components` or `node_modules`, depending on where it was installed from. Then, apply the mixin using a selector of your choosing -- an element or class selector is most common.

### Text Inputs:

HTML:

```html
<input type="text" placeholder="Enter a name..." />
```

SASS:

```scss
@import 'bower_components/vui-input/input.scss';
// or...
@import 'node_modules/vui-input/input.scss';

input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"] {
	@include vui-input();
}
```

Result:

![screenshot of text input](/screenshots/text.png?raw=true)

### Checkboxes:

**Browser Compatibility:** Due to lack of support for custom input styling in Firefox and older versions of IE, checkboxes rendered in those browsers will have the operating system default style.

HTML:

```html
<label class="checkbox-label">
	<input type="checkbox" />ketchup
</label><br />
<label class="checkbox-label">
	<input type="checkbox" />mustard
</label>
```

SASS:

```scss
@import 'bower_components/vui-input/input-checkbox.scss';
// or...
@import "node_modules/vui-input/input-checkbox.scss";

input[type="checkbox"] {
	@include vui-input-checkbox();
}

.checkbox-label {
	@include vui-input-checkbox-label();
}
```

Note: the `vui-input-checkbox-label` mixin used above helps control the alignment of the label text in situations where it might wrap onto multiple lines.

Result:

![screenshot of checkboxes](/screenshots/checkbox.png?raw=true)

### Radios:

**Browser Compatibility:** Due to lack of support for custom input styling in Firefox and older versions of IE, radio buttons rendered in those browsers will have the operating system default style.

HTML:

```html
<label class="radio-label">
	<input type="radio" name="food" checked />hot dog
</label><br />
<label class="radio-label">
	<input type="radio" name="food" />hamburger
</label>
```

SASS:

```scss
@import 'bower_components/vui-input/input-radio.scss';
// or...
@import "node_modules/vui-input/input-radio.scss";

input[type="radio"] {
	@include vui-input-radio();
}

.radio-label {
	@include vui-input-radio-label();
}
```

Note: the `vui-input-radio-label` mixin used above helps control the alignment of the label text in situations where it might wrap onto multiple lines.

Result:

![screenshot of radio buttons](/screenshots/radio.png?raw=true)

### Selects:

HTML:

```html
<select>
	<option>Option 1</option>
	<option>Option 2</option>
</select>
```

SASS:

```scss
@import 'bower_components/vui-input/select.scss';
// or...
@import "node_modules/vui-input/select.scss";

select {
	@include vui-input-select();
}
```

Result:

![screenshot of select inputs](/screenshots/select.png?raw=true)

### Textareas:

HTML:

```html
<textarea placeholder="Enter a description..."></textarea>
```

SASS:

```scss
@import 'bower_components/vui-input/textarea.scss';
// or...
@import "node_modules/vui-input/textarea.scss";

textarea {
	@include vui-input-textarea();
}
```

Result:

![screenshot of textareas](/screenshots/textarea.png?raw=true)

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-input
[bower-image]: https://img.shields.io/bower/v/vui-input.svg
[npm-url]: https://npmjs.org/package/vui-input
[npm-image]: https://img.shields.io/npm/v/vui-input.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-input
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-input.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-input
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-input.svg
