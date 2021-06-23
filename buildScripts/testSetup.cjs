// This file isn't transpiled, so must use CommonJS and ES5
//import { createRequire } from "module";
//const require = createRequire(import.meta.url);

// Register babel to transpile before our test are run
require('@babel/register')();

// Disable webpack features the Mocha doesn't understand
require.extensions['.css'] = function() {};
