require("isomorphic-fetch");

function sum(a, b) {
   return a + b;
}

// https://jsonplaceholder.typicode.com/
async function getTodo() {
   let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   return res.json();
}


module.exports = { sum, getTodo };

