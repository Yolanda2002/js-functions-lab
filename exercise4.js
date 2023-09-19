fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completednum = json.reduce((total, todo) => {
      return total + todo.completed
    }, 0)
    console.log(completednum)
  })
  .catch(function (err) {
    console.log(err)
  })