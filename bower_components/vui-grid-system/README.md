# vui-grid-system
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com) for laying out and positioning UI elements using the standard Brightspace grid system.

For further information on this other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-grid-system` can be installed from [Bower][bower-url]:
```shell
bower install vui-grid-system
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-grid-system
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import "bower_components/vui-grid-system/grid-system.scss";
// or...
@import "node_modules/vui-grid-system/grid-system.scss";
```

## Usage

### Set the grid layout container

Use the `vui-gs-container` mixin to set the grid container. This will typically be applied to the outer-most element of your application, such as the `<body>` or `<main>` element.

```scss
body {
	@include vui-gs-container();
}
```

The container mixin will define the basic layout for the grid-system, including number of columns (12) and the size of the gutters between columns.

#### Debugging

During development and testing, it's sometimes helpful to see the grid system and how it's being applied to your application. To do this, add the `vui-gs-debug` class name to your container element:

```html
<body class="vui-gs-debug">...</body>
```

An overlay showing the columns and gutters will then be visible.

### Spans

Use the `vui-gs-span` mixin to configure the number of columns an element will span. The grid system has **12 total columns**. It supports properties for defining edge columns, forcing breaks, and changing context (number of columns).

For example, to create a layout with a side navigation spanning 4 columns and a main area spanning 8:
```html
<body>
	<nav>side nav</nav>
	<main>main content</main>
</body>
```

SASS:
```scss
body {
	@include vui-gs-container();
}
nav {
	@include vui-gs-span(4);
}
main {
	@include vui-gs-span(last 8);
}
```

`last` is used to indicate the last span in a row, so that gutter margins are not applied after the element, thereby preventing the last element from wrapping.

#### Break argument

To "clear" the current row of elements after a particular element, use the `break` keyword. Think of it like a line break.

This example has a single element which spans only 4 columns, and then "breaks" to the next row:
```html
<div class="lone-wolf">...</div>
```

SASS:
```scss
.lone-wolf {
	@include vui-gs-span(4 break);
}
```

### Nesting

To create a set of nested spans based on a different number of columns, the `of` argument can be used. Think of it as switching the context of the grid system.

```scss
// an element that spans 2 of 6 columns (changes context)
.span-2-of-6 {
	@include vui-gs-span(2 of 6);
}
```

## A Note on Responsive Design

The grid system itself is fluid. In other words, the width of the columns and gutters grows/shrinks to fit the browser window. But there are always 12 columns. Therefore, in order to make your application ["responsive"](https://en.wikipedia.org/wiki/Responsive_web_design), you need to adjust how many columns your elements span.

**Important:** the responsive breakpoints (the viewport sizes at which your responsive rules kick in) should be based on your application, not any particular device size. Google has [a great article](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/how-to-choose-breakpoints?hl=en) on the reasoning behind this.

For example, let's take a 2-column interface similar to the first example above with a side-nav spanning 4/12 and the main content area spanning 8/12. Based on how the content behaves as the viewport gets smaller, we decide that below 700 pixels we will switch both the side-nav and main content area to span all 12 columns.

Here's the markup:
```html
<body>
	<nav>side nav</nav>
	<main>main content</main>
</body>
```

And corresponding SASS:
```scss
body {
	@include vui-gs-container();
}

nav, main {
	@include vui-gs-span(last 12);
}

@media (min-width: 700px) {
	nav {
		@include vui-gs-span(4);
	}
	main {
		@include vui-gs-span(last 8);
	}
}
```

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-grid-system
[bower-image]: https://img.shields.io/bower/v/vui-grid-system.svg
[npm-url]: https://www.npmjs.org/package/vui-grid-system
[npm-image]: https://img.shields.io/npm/v/vui-grid-system.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-grid-system
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-grid-system.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-grid-system
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-grid-system.svg
