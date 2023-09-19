fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const alreadyCompleted = json.reduce((count, todo) => {
            const currentCount = count[todo.userId] ?? 0
            return {
                ...count,
                [todo.userId]: currentCount + todo.completed,
            }
        }, {})
        console.log(alreadyCompleted)
    })
    .catch(function (err) {
        console.log(err)
    })