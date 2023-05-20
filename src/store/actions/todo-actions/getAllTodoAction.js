import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await API.get(`/api/todos/${userId}`)
      const todos = response.data
      return todos
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
