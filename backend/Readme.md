# Todo List App - Backend

A RESTful API server built with Node.js, Express.js, and MongoDB for managing todo items with full CRUD operations, search functionality, and pagination.

## Features

- ✅ Complete CRUD operations for todos
- 🔍 Search todos by title and description
- 📄 Pagination support
- ✔️ Status toggle (completed/pending)
- 🗄️ MongoDB database integration

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling

## Installation & Setup

1. **Clone the repository and navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   
   Create a `.env` file in the backend root directory:
   ```env
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/todoapp
   ```
   
   **Environment Variables:**
   - `PORT` - Server port (default: 4000)
   - `MONGODB_URI` - MongoDB connection string

   **For MongoDB Atlas (cloud):**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
   ```

## Running the Application

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:4000` (or your specified PORT)

## API Endpoints

### Base URL: `http://localhost:4000/api/todos`

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| `GET` | `/` | Get all todos with pagination | `page`, `limit`, `sort` |
| `GET` | `/:id` | Get single todo by ID | `id` (path) |
| `POST` | `/` | Create new todo | `title`, `desc` (body) |
| `PATCH` | `/:id` | Update todo | `id` (path), `title`, `desc` (body) |
| `PATCH` | `/status/:id` | Toggle todo status | `id` (path), `completed` (body) |
| `DELETE` | `/:id` | Delete todo | `id` (path) |
| `GET` | `/search/:query` | Search todos | `query` (path) |

### Example API Requests

**Create Todo:**
```bash
POST /api/todos
Content-Type: application/json

{
  "title": "Learn React",
  "desc": "Complete React tutorial and build a project"
}
```

**Update Todo Status:**
```bash
PATCH /api/todos/status/64f8d12e5a1b2c3d4e5f6789
Content-Type: application/json

{
  "completed": true
}
```

**Search Todos:**
```bash
GET /api/todos/search/react
```

**Get Todos with Pagination:**
```bash
GET /api/todos?page=1&limit=10&sort=-createdAt
```

## Data Model

### Todo Schema
```javascript
{
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

**Error Response Format:**
```json
{
  "error": "Error message description"
}
```
