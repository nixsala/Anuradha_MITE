let input = prompt('what would you like to do??');
const todo = ['Reading', 'Singing', 'playing'];
while (input !== 'quit' && input !== 'q') {
    if (input == 'list') {
        console.log('***************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);

        }
        console.log('***************')
    } else if (input == 'new') {
        const newTodo = prompt('Ok, what is the new to do');
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input == 'delete') {
        const index = parseInt(prompt('Ok, enter the index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`ok .deleted ${deleted[0]}`);
        } else {
            console.log('unknown index')
        }

    }
    input = prompt('what would you like to do?');


}
console.log('OK QUIT THE APP')


