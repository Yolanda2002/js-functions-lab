fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter(todo => todo.completed===false)
     .map(todo =>{
        return {
            userId: todo.userId,
            title: todo.title
        }
     }); 
     console.log(uncompleted); // Show the array
  })
  .catch(function(err) { 
    console.log(err);
  });

