# sort-scripts
Sort scripts based on prefix and suffix

# Usage

Given an map of script names to behavior (as is found in `package.json` files for Node projects), sort the scripts in a logical order, considering `pre` and `post` prefixes:

```js
const sort = require('sort-scripts');
const scripts = {
  test: "jest",
  pretest: "check-engines",
  postmerge: "lint-staged",
  docs: "markdown-magic",
  postdocs: "echo \"'.md' files updated\""
};

sort(scripts);
// [
//   ["docs", "markdown-magic"], 
//   ["postdocs", "echo \"'.md' files updated\"],
//   ["postmerge", "lint-staged"],
//   ["pretest", "check-engines"],
//   ["test", "jest"]
// ]
```
