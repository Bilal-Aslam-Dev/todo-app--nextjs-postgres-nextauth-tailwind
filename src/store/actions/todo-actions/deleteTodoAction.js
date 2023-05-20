import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async ({ id: todoId, userId }) => {
  try {
    await API.delete(`/api/todos/${todoId}`, { data: { userId } })
    return todoId
  } catch (error) {
    throw new Error(error.message)
  }
})
