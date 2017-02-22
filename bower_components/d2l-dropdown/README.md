**Looking for SASS-based `vui-dropdown`?** It's [over here](https://github.com/Brightspace/valence-ui-dropdown/tree/sass).

# d2l-dropdown
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for dropdown/flyouts.

## Installation

`d2l-dropdown` can be installed from [Bower][bower-url]:
```shell
bower install d2l-dropdown
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the opener and content components as needed:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
</head>
```

### Dropdown Openers

#### Generic Opener

`d2l-dropdown` is a generic opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`) enabling alternate opener implementation using existing elements/components. Provide and indicate your own opener element with the class attribute value `d2l-dropdown-opener`.  Wire-up is automatic.

```html
<link rel="import" href="../d2l-dropdown/d2l-dropdown.html">
<link rel="import" href="../d2l-dropdown/d2l-dropdown-content.html">

<d2l-dropdown>
	<button class="d2l-dropdown-opener">Open!</button>
	<d2l-dropdown-content>
		Some content...
	</d2l-dropdown-content>
</d2l-dropdown>
```

If the dropdown is initially empty when it's opened, the dropdown pointer will not be positioned correctly.  In such cases, the `no-auto-open` attribute may be added to the opener, enabling you to take control of when the dropdown is actually opened:

```html
<d2l-dropdown no-auto-open>
	...
</d2l-dropdown>
```

```javascript
dropdown.addEventListener('click', function() {
	// fetch some content
	...
	// take control of when the dropdown is actually opened
	dropdown.toggleOpen();
});
```

#### Button Opener

`d2l-dropdown-button` is a `d2l-button` opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`).  Provide `text` for the button and content component as needed.

```html
<link rel="import" href="../d2l-dropdown/d2l-dropdown-button.html">
<link rel="import" href="../d2l-dropdown/d2l-dropdown-content.html">

<d2l-dropdown-button text="Open!" primary>
	<d2l-dropdown-content>
		Some content...
	</d2l-dropdown-content>
</d2l-dropdown-button>
```

* `primary` - optionally render button as primary button

#### Context Menu Opener

`d2l-dropdown-context-menu` is a simple/minimal opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`).  Provide `text` for accessibility and content component as needed.

```html
<link rel="import" href="../d2l-dropdown/d2l-dropdown-context-menu.html">
<link rel="import" href="../d2l-dropdown/d2l-dropdown-content.html">

<d2l-dropdown-context-menu text="Open!">
	<d2l-dropdown-content>
		Some content...
	</d2l-dropdown-content>
</d2l-dropdown-context-menu>
```

### Dropdown Contents

#### Generic Content

`d2l-dropdown-content` is a generic container for dropdown content.  It provides behavior such as sizing,  positioning, and managing focus gain/loss.

```html
<link rel="import" href="../d2l-dropdown/d2l-dropdown-content.html">

<d2l-dropdown-content min-width="..." max-width="..." no-padding>
	Some content...
</d2l-dropdown-content>
```

* `min-width` (number) - optionally override default min-width
* `max-width` (number) - optionally override default max-width
* `no-auto-fit` - optionally opt out of auto-sizing
* `no-padding` - optionally render with no padding
* `no-pointer` - optionally render without a pointer
* `render-content` - optionally stamp contents into DOM immediately
* `vertical-offset` - optionally provide custom offset, positive or negative

```javascript
// triggered when dropdown opened
content.addEventListener('d2l-dropdown-open', () => { ... });

// triggered when dropdown closed
content.addEventListener('d2l-dropdown-close', () => { ... });
```

#### Menu Content

`d2l-dropdown-menu` is a container for a [d2l-menu](https://github.com/Brightspace/d2l-menu-ui) component.  It provides behavior in addition to the basic behavior of `d2l-dropdown-content` such as closing the menu when menu items are selected, resetting to the root of nested menus when reopening, etc.

```html
<link rel="import" href="../d2l-dropdown/d2l-dropdown-menu.html">

<d2l-dropdown-menu>
	<d2l-menu label="some menu">
		...
	</d2l-menu>
</d2l-dropdown-menu>
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-dropdown
[bower-image]: https://img.shields.io/bower/v/d2l-dropdown.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/dropdown
[ci-image]: https://travis-ci.org/BrightspaceUI/dropdown.svg?branch=master
