// npm -- global commanbd, comes with node
// npm --version

// local dependency -- use it only in this particular project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores importatn info about project/package)
// manual approach (creat package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// download packages in Dev dependencies
// npm i <packageName> -D or --save-dev

const _ = require('lodash');

const items = [1, [2,3,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)