import { createSlice } from '@reduxjs/toolkit'

import {
  getAllTodos,
  deleteTodo,
  updateTodo,
  createTodo,
} from '../../actions/todo-actions/'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false
        state.todos = state.todos
          ? [...state.todos, action.payload]
          : [action.payload]
        state.error = null
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
        state.error = null
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false
        const updatedTodoIndex = state.todos.findIndex(
          todo => todo.id === action.payload.id
        )
        if (updatedTodoIndex !== -1) {
          state.todos[updatedTodoIndex] = action.payload
        }
        state.error = null
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
        state.error = null
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false
          state.error = action.error.message
        }
      )
  },
})

export default todosSlice.reducer
