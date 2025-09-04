# Todo List App - Frontend

A modern, responsive React application for managing todos with real-time search, pagination, and intuitive user interface.

## Features

- ✅ Create, read, update, and delete todos
- 🔍 Real-time search functionality
- ✔️ Toggle todo completion status
- 📱 Responsive design for all devices
- 📄 Pagination for better performance
- 🎨 Clean and modern UI
- ⚡ Fast and smooth user experience
- 🔄 Optimistic UI updates

## Tech Stack

- **Axios** - HTTP client for API requests
- **date-fns** - Date formatting utilities
- **Font Awesome** - Icons
- **Google Fonts** (Poppins) - Typography

## Installation & Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   
   The app is configured to work with the backend at `http://localhost:4000` by default through the proxy setting in `package.json`.
   
   If you need to change the backend URL, create a `.env` file:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:4000
   ```

4. **Ensure Backend is Running:**
   
   Make sure your backend server is running on `http://localhost:4000` before starting the frontend.

## Running the Application

### Development Mode:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Key Components

### TodoForm
- Create new todos with title and description
- Form validation and error handling
- Auto-clear form after submission

### TodoDetails
- Display todo information with formatted dates
- Toggle completion status with checkbox
- Edit and delete functionality
- Confirmation dialog for deletions

### SearchBar
- Real-time search through todo titles and descriptions

### Pagination
- Navigate through large todo lists
- Show current page info and total count
- Smart page number display with ellipsis ( ... )

### API Endpoints Used

```javascript
// Get all todos with pagination
GET /api/todos?page=1&limit=10

// Create new todo
POST /api/todos

// Update todo
PATCH /api/todos/:id

// Update todo status
PATCH /api/todos/status/:id

// Delete todo
DELETE /api/todos/:id

// Search todos
GET /api/todos/search/:query
```