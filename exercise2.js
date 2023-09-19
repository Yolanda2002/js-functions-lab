fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoTitles = json.map(todo => todo.title); // Create new array
     console.log(todoTitles); // Show the array
  })
  .catch(function(err) { 
    console.log(err);
  });
