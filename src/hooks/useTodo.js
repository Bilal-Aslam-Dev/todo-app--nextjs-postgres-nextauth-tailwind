import { useSelector, useDispatch } from 'react-redux'

import { useSession } from 'next-auth/react'

import {
  getAllTodos as getAllTodosAction,
  deleteTodo as deleteTodoAction,
  updateTodo as updateTodoAction,
  createTodo as createTodoAction,
} from '@/store/actions/todo-actions'

export const useTodos = () => {
  const { data: session } = useSession()
  const { userId } = session.user

  const { todos, loading, error } = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const fetchTodos = () => {
    dispatch(getAllTodosAction(userId))
  }

  const updateTodo = (id, todo) => {
    dispatch(updateTodoAction({ id, todo: { ...todo, userId } }))
  }

  const deleteTodo = id => {
    dispatch(deleteTodoAction({ id, userId }))
  }

  const createTodo = newTodo => {
    dispatch(createTodoAction({ ...newTodo, userId }))
  }
  return {
    todos,
    loading,
    error,
    fetchTodos,
    updateTodo,
    deleteTodo,
    createTodo,
  }
}
