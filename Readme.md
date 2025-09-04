# 📋 Modern Todo List Application

A full-stack todo management application built with React and Node.js, featuring real-time search, pagination, and a clean, responsive user interface.

<div align="center">

![Todo List App](https://img.shields.io/badge/Todo%20List-Full%20Stack-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-ISC-yellow)

</div>

##  🌐 Deployment Link

## ✍️ [Todo List App](https://todo-list-mern-382a.vercel.app/)
```bash
https://todo-list-mern-382a.vercel.app/
```

## 📸 Screenshots

![Home Page](screenShots/TodoListHomePage.png)

## ✨ Features

### Core Functionality
- ✅ **Complete CRUD Operations** - Create, read, update, and delete todos
- 🔍 **Real-time Search** - Search through titles and descriptions instantly  
- 📄 **Smart Pagination** - Efficient navigation through large todo lists
- ✔️ **Status Management** - Toggle between completed and pending states
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### Advanced Features
- 🎨 **Modern UI/UX** - Clean design with smooth animations
- ⚡ **Optimistic Updates** - Instant UI feedback with server synchronization
- 🛡️ **Error Handling** - Comprehensive error management with user feedback
- 📊 **Pagination Info** - Clear indication of current page and total items

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library with latest features
- **React Router DOM** - Client-side routing
- **Axios** - Promise-based HTTP client
- **date-fns** - Modern JavaScript date utility library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL document database
- **Mongoose** - Elegant MongoDB object modeling

### Development Tools
- **nodemon** - Automatic server restart
- **mongoose-paginate-v2** - Pagination plugin
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Poppins)

## 🚀 Quick Start

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sachinsaini7870/TodoListMERN.git
   cd TodoListMERN
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
      
   # Start the server
   npm run dev
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   
   # Start the React app
   npm start
   ```

4. **Access the Application:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:4000`

## 📋 API Documentation

### Base URL: `http://localhost:4000/api/todos`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/` | Get all todos (paginated) | - |
| `GET` | `/:id` | Get single todo | - |
| `POST` | `/` | Create new todo | `{title, desc}` |
| `PATCH` | `/:id` | Update todo | `{title, desc}` |
| `PATCH` | `/status/:id` | Toggle status | `{completed}` |
| `DELETE` | `/:id` | Delete todo | - |
| `GET` | `/search/:query` | Search todos | - |

### Query Parameters
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sort` - Sort order (default: -createdAt)

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/todoapp
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
```

**Frontend (.env - optional):**
```env
REACT_APP_API_BASE_URL=http://localhost:4000
```

## 🎨 Design Features

### Responsive Design
- **Desktop**: Two-column layout (form + todo list)
- **Mobile**: Single column with fixed header
- **Tablet**: Optimized layouts for medium screens

### UI Components
- **Loading States** - Smooth loading indicators
- **Empty States** - Friendly messages when no todos exist
- **Confirmation Dialogs** - Prevent accidental deletions
- **Form Validation** - Real-time input validation

## 📱 Usage Guide

### Creating Todos
1. Fill in the "Add a New Todo" form
2. Enter a title (required) and optional description
3. Click "Add Todo" button
4. Todo appears instantly at the top of the list

### Managing Todos
- **Mark as Complete**: Click the checkbox next to any todo
- **Edit Todo**: Click the edit icon to modify title/description
- **Delete Todo**: Click the delete icon and confirm deletion
- **Search**: Use the search bar to find specific todos

### Navigation
- Use pagination controls at the bottom to navigate pages
- Search functionality works across all todos
- Page state is maintained during navigation



## 👨‍💻 Author

**Sachin** - Full Stack Developer

---

<div align="center">

Made with ❤️ using React, Node.js, and MongoDB
