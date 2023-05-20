// Define the type for the todo object
interface Todo {
  id: number
  text: string
  date: string
  status: number
}

// Define the type for the todos state
interface TodosState {
  loading: boolean
  todos: Todo[] | null
  error: string | null
}

// Define the type for the root Redux state
interface RootState {
  todos: TodosState
}

export type { TodosState, RootState, Todo }
