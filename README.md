# rxy
rxy is a tool for solving complex problems in a efficient manner. It utilizes cutting-edge techniques and algorithms to deliver accurate and reliable results.

Last Edited: `2022-12-27`

## Features
- Divide and conquer: rxy uses the divide and conquer approach to break complex problems down into smaller, more manageable pieces and solve them individually
- Dynamic programming: rxy uses dynamic programming to store the solutions to subproblems in a table, enabling efficient reuse of these solutions.
- Graph search: rxy includes algorithms for traversing graph data structures in order to find solutions to problems.

## Installation
To install rxy, clone the repository and run `npm install`:

```bash
git clone https://github.com/1RB/rxy.git
cd rxy
npm install
```

## Usage
To use rxy, require it in your project and call the desired function:

```javascript
const rxy = require('rxy');
console.log(rxy.findMax([1, 2, 3, 4, 5]));  // prints 5
console.log(rxy.knapsack([[5, 3], [4, 2], [6, 4], [3, 1]], 6));  // prints 9
for (const path of rxy.dfs({1: [2, 3], 2: [4, 5], 3: [5]}, 1, 5)) {
console.log(path);  // prints [1, 2, 5] and [1, 3, 5]
}
```

## Contributing
If you are interested in contributing to the project, please see the [contributing guidelines](CONTRIBUTING.md).

## License
rxy is released under the [MIT License](LICENSE).

