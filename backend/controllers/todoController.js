const Todo = require('../models/todoModel');
const mongoose = require('mongoose')

// Get all todos with optional query parameters
exports.getTodos = async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const sort = req.query.sort || '-createdAt'; 

  const options = {
    page: page,
    limit: limit,
    sort: sort,
    lean: true, 
  };

  const todos = await Todo.paginate({}, options);
  
  // const todos = await Todo.find({}).sort({ createdAt: -1 })

  if (!todos)
    return res.status(400).json({ error: "No entries found" })
  res.status(200).json(todos);


};

// Get a single todo by id
exports.getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo" })

  }
  // const todo = await Todo.find({_id:id})
  const todo = await Todo.findById(id)
  if (!todo)
    return res.status(400).json({ error: "No such todo" })
  res.status(200).json(todo)
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const { title, desc, completed } = req.body;

  // add doc to db
  try {
    const todo = await Todo.create({ title, desc, completed })
    res.status(201).json(todo)

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const {title} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo" })
  }

  if (!title || title.trim().length === 0) {
    return res.status(404).json({ error: "title should not be empty" })

  }

  const todo = await Todo.findOneAndUpdate(
    {
      _id: id
    },
    {
      ...req.body
    },
    {
      new: true
    }
  )

  if (!todo)
    return res.status(400).json({ error: "No such todo" })

  res.status(200).json(todo)

};

// update Status
exports.updateTodoStatus = async (req, res) => {
  const { id } = req.params;
  const {completed} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo" })
  }

  const todo = await Todo.findOneAndUpdate(
    {
      _id: id
    },
    {
      completed:completed
    },
    {
      new: true
    }
  )

  if (!todo)
    return res.status(400).json({ error: "No such todo" })

  res.status(200).json(todo)

};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  // const todo = await Todo.findByIdAndDelete(id);
  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(400).json({ error: "No such todo to delete" })
  }
  res.status(200).json(todo);
};


// Search todos by query in title or description
exports.searchTodos = async (req, res) => {
  const { query } = req.params;

  // Validate query parameter
  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Search query is required." });
  }

  // Search for todos matching the query (case-insensitive)
  const todos = await Todo.find({
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { desc: { $regex: query, $options: 'i' } }
    ]
  });


  if (!todos || todos.length === 0) {
    return res.status(404).json({ error: "No matching todos found." });
  }

  res.status(200).json(todos);
};