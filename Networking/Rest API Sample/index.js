const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5111;
app.use(bodyParser.json());
app.all('/', (req, res) => {
console.log('Received request:', req);
console.log('res',res);
res.send('I am ready!');
});
const todos= [
    { "id": 1, "title": 'Buy groceries', "completed": false },
    { "id": 2, "title": 'Walk the dog', "completed": true },
    { "id": 3, "title": 'Read a book', "completed": false }
];
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({ message: 'Todo added successfully'});
});

app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
        todos[index] = { id: todoId, ...updatedTodo };
        res.json({ message: 'Todo updated successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
        todos.splice(index, 1);
        res.json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});