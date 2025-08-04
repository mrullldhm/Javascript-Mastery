// Webpack js a module bundler that takes all the files(JS, CSS, image, etc) and bundles them into a single file

// Purpose
// It helps the app load faster, makes code easier to manage, and allows you to use tools like Babel and CSS preprocessors.

// How it works
// You set up a webpack.config.js file to tell Webpack what to do.
// It starts at an "entry point" (like index.js), follows all your import or require statements, and bundles everything.
// You can also add loaders (like Babel) and plugins (like minifiers).

// Example
// index.js
import './style.css';
import { greet } from './utils';

greet();
