import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const createTodo = createAsyncThunk('todos/createTodo', async todo => {

  try {
    const response = await API.post('/api/todos/createTodo', todo)
    const createdTodo = response.data
    return createdTodo

  } catch (error) {
    throw new Error(error.message)

  }
})
