import React, { useEffect, useState, useCallback } from 'react'

import api from '../api'

// Components
import TodoDetails from '../components/TodoDetails'
import TodoForm from '../components/TodoForm'
import { useTodosContext } from '../hooks/useTodoContext'
import LoadingSpinner from '../components/LoadingSpinner'
import NoTodoFound from '../components/NoTodoFound'
import Pagination from '../components/Pagination'

const Home = () => {
  const { todos, dispatch, setGlobalPageNo, setGlobalPageLimit } = useTodosContext();
  const [isLoading, setIsLoading] = useState(true);
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    totalPages: 1,
    totalDocs: 0,
    limit: 10,
    hasNextPage: false,
    hasPrevPage: false
  });

  const fetchTodos = useCallback(async (page = 1) => {
    setIsLoading(true);
    try {
      // Get todos for the given page and limit
      const response = await api.get('/api/todos/', {
        params: {
          page: page,
          limit: paginationData.limit
        }
      });
      const data = response.data;
      if (data.docs) {
        dispatch({ type: 'SET_TODOS', payload: data.docs });
        setPaginationData({
          currentPage: data.page || page,
          totalPages: data.totalPages || 1,
          totalDocs: data.totalDocs || 0,
          limit: data.limit || 10,
          hasNextPage: data.hasNextPage || false,
          hasPrevPage: data.hasPrevPage || false
        });
      } else {
        dispatch({ type: 'SET_TODOS', payload: data });
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, paginationData.limit]);

  // Fetch todos when component mounts or fetchTodos changes and always loads page 1 on mount.
  useEffect(() => {
    fetchTodos(1);
  }, [fetchTodos]);

  // Handles page change from Pagination component and updates global page number and limi, and fetches new page.
  const handlePageChange = (newPage, limit) => {
    if (newPage >= 1 && newPage <= paginationData.totalPages) {
      fetchTodos(newPage);
      setGlobalPageNo(newPage);
      setGlobalPageLimit(limit)
    }
  };

  return (
    <div className='home'>
      <TodoForm />
      <div >
        <div className="todos">
          {isLoading ? (
            <LoadingSpinner />
          ) : todos && todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                <TodoDetails key={todo._id} todo={todo} />
              ))}
            </>
          ) : (
            <NoTodoFound todos={todos} />
          )}
        </div>
        <Pagination
          currentPage={paginationData.currentPage}
          totalPages={paginationData.totalPages}
          totalDocs={paginationData.totalDocs}
          limit={paginationData.limit}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;