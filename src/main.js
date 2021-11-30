import App from './App.svelte';

// NOTE: This plugins supports two forms of importing css, when a css file is imported without an assigned variable, the css is bundled into a single css file. (https://github.com/jleeson/rollup-plugin-import-css)
import 'blueprint-css/dist/blueprint.min.css';

const app = new App({
	target: document.body
});

export default app;