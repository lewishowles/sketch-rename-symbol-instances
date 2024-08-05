/**
 * Find each symbol instance in the current document and rename it based on its
 * originating symbol's name.
 */

const sketch = require("sketch");

export default function() {
	const document = sketch.getSelectedDocument();
	const pages = document.pages;

	let count = 0;

	function renameSymbolInstances(layers) {
		layers.forEach(layer => {
			if (layer.type === 'SymbolInstance') {
				layer.name = layer.master.name;
				count++;
			} else if (layer.layers && layer.layers.length > 0) {
				renameSymbolInstances(layer.layers);
			}
		});
	}

	pages.forEach(page => {
		renameSymbolInstances(page.layers);
	});

	sketch.UI.message(`${count} layers renamed`);
}
