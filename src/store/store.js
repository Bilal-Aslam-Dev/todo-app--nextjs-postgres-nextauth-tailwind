import { configureStore } from '@reduxjs/toolkit'

import todoSlice from './slices/todo/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoSlice,
    // Add other reducers/slices here if you have more
  },
})

export default store
