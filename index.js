require("isomorphic-fetch");

function sum(a, b) {
   return a + b;
}

// https://jsonplaceholder.typicode.com/
async function getTodo(todoId, fetchFunction) {

   let res = await fetchFunction("https://jsonplaceholder.typicode.com/todos/" + todoId)
   return res.json();
}


module.exports = { sum, getTodo };

