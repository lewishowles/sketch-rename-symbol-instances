# Sketch rename symbol instances

This plugin allows you to rename all symbol instances in the current document to match the original symbol in its library.

## Why?

When adding a symbol from a library, by default the layer is named based on the symbol name in the library. However, if you then swap that symbol for another—for example when changing an icon—the original name remains and instances are no longer sensibly named. This plugin fixes that and keeps things neater and more sensible.

## How?

The plugin simply finds each symbol instance in the current document and copies the name from its originating symbol.

## Installation

- Download and unzip the [latest release](../../releases/latest) of the plugin
- Double-click on `sketch-rename-symbol-instances.sketchplugin`
