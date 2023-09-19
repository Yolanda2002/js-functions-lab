fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const uncompleted = json.reduce((numUncompleted, todo, index) => {
            return {
                ...numUncompleted,
                [index]: {
                    userId: todo.userId,
                    title: todo.title
                }
            }
        }, {});

        console.log(uncompleted) // Show the array
    })
    .catch(function (err) {
        console.log(err);
    })
