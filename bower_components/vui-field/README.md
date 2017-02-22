# vui-field
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [SASS mixins](http://sass-lang.com/) and CSS which can be used to style fields and labels. It's best used in conjunction with the [VUI inputs](https://github.com/Brightspace/valence-ui-input) and [VUI grid system](https://github.com/Brightspace/valence-ui-grid-system) components.

Here's what fields look like:

![screenshot of fields](/screenshots/overview.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-field` can be installed from [Bower][bower-url]:
```shell
bower install vui-field
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-field
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-field/field.scss';
// or...
@import 'node_modules/vui-field/field.scss';
```

## Usage

### Field Rows

In order to create some vertical space between fields, use the `vui-field-row()` mixin on a parent element, like a `<div>`.

HTML:
```html
<div class="field-row">
	<!-- field 1 -->
</div>
<div class="field-row">
	<!-- field 2 -->
</div>
<!--  and so on... -->
```
SCSS:
```scss
.field-row {
	@include vui-field-row();
}
```

### Field Labels

Within each field row, your form input element (text, checkbox, select, etc.) should always be associated with a text label using the HTML `<label>` element. For accessibility, don't forget to [connect the label with the input](http://www.w3.org/TR/WCAG-TECHS/H44.html) using the `for` and `id` attributes.

HTML:
```html
<div class="row">
	<label class="field-label" for="myInput">First Name</label>
	<input type="text" id="myInput" />
</div>
```

Use the `vui-field-label()` mixin to apply typographical styles to the label:
```scss
.field-label {
	@include vui-field-label();
}
```

#### Stacked vs. Inline Labels

By default, the `vui-field-label()` mixin assumes you would like the label to be **stacked** vertically *above* the input, and as such provides some space between the two.

If instead you'd like the label to be positioned *beside* the input, pass `true` as the value of the `inline` parameter:

```scss
.field-label-inline {
	@include vui-field-label($inline: true);
}
```

Sample of inline labels:

![screenshot of inline fields](/screenshots/inline.png?raw=true)

**NOTE**: For inline labels, to position the label beside the input, we recommend using a grid system such as the [VUI Grid System](https://github.com/Brightspace/valence-ui-grid-system).

### Required Fields

To visually call out a field as required, the `vui-field-label-required()` mixin can be applied to the label. It should be applied *in addition to* the `vui-field-label()` mixin.

A required field:

![screenshot of required field](/screenshots/required.png?raw=true)

**Important:** this is merely a *visual* flag. To ensure you meet accessibility requirements, mark up the corresponding input with the HTML `required` and `aria-required` attributes.

HTML:
```html
<label class="field-label field-label-required" for="myInput">First Name</label>
<input type="text" id="myInput" required aria-required="true" />
```

SASS:
```scss
.field-label-required {
	@include vui-field-label-required();
}
```

### Fieldsets

When you have more than one related form element (like checkboxes and radio buttons), group them together using the `<fieldset>` and `<legend>` elements. [WCAG: techniques for using fieldset and legend](http://www.w3.org/TR/WCAG-TECHS/H71.html).

For example:

![screenshot of fieldsets](/screenshots/fieldset.png?raw=true)

The field row and label mixins can then be applied to the `<fieldset>` and `<legend>` elements:

```html
<fieldset class="field-row">
	<legend class="field-label">What would you like for lunch?</legend>
	<input type="radio" name="apples" />hamburger
	<input type="radio" name="apples" />hot dog
</fieldset>
```

## Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-field
[bower-image]: https://img.shields.io/bower/v/vui-field.svg
[npm-url]: https://www.npmjs.org/package/vui-field
[npm-image]: https://img.shields.io/npm/v/vui-field.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-field
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-field.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-field
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-field.svg
