const express = require('express');
const router = express.Router();
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo, searchTodos, updateTodoStatus } = require('../controllers/todoController');



/**
 * Route: /api/todos
 * Method: GET
 * Description: Get all todos
 * Access: Public
 * Parameters: None
*/
router.get('/', getTodos);

/**
 * Route: /api/todos/:id
 * Method: GET
 * Description: Get a single todo by its ID
 * Access: Public
 * Parameters:  id
*/
router.get('/:id', getTodo);

/**
 * Route: /api/todos/
 * Method: POST
 * Description: create new todo
 * Access: Public
 * Parameters:  None
*/
router.post('/', createTodo);

/**
 * Route: /api/todos/:id
 * Method: PATCH  
 * Description: update existing todo
 * Access: Public
 * Parameters:  id
*/
router.patch('/:id', updateTodo);

/**
 * Route: /api/todos/status/:id
 * Method: PATCH  
 * Description: update existing todo status
 * Access: Public
 * Parameters:  id
*/
router.patch('/status/:id', updateTodoStatus);

/**
 * Route: /api/todos/:id
 * Method: DELETE
 * Description: Delete existing todo
 * Access: Public
 * Parameters:  id
*/
router.delete('/:id', deleteTodo);

/**
 * Route: /api/todos/:query
 * Method: GET
 * Description: Search for existing todos
 * Access: Public
 * Parameters:  query
*/
// Search todos
router.get('/search/:query', searchTodos);






module.exports = router;