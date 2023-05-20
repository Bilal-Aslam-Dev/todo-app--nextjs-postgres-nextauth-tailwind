import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, todo }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/api/todos/${id}`, todo)
      const updatedTodo = response.data
      return updatedTodo
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
