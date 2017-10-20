[![Build Status](https://travis-ci.org/Brightspace/d2l-image-banner-overlay.svg?branch=master)](https://travis-ci.org/Brightspace/d2l-image-banner-overlay)

# d2l-image-banner-overlay

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for the D2L course image banner overlay

## Running tests locally in Windows

Tests in this repo use web-component-tester (WCT). Currently WCT has an issue in Windows with tests taking about a minute to start.  A workaround is to set two environment variables for Launchpad (a library used by WCT).  These help bypass browser searching which is what causes the delay.  For example:
LAUNCHPAD_BROWSERS=CHROME
LAUNCHPAD_CHROME-'C:\Program Files (x86)\Google\Chrome\Application'

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.
