import { createTodo } from '@/backend/services/todos/createTodo'

export const createTodoController = async (_req, _res) => {
  const todo = _req.body
  try {
    const newTodo = await createTodo(todo, _res)
    return _res.status(201).send(newTodo)
  } catch (error) {
    _res.status(501).send('Could not create todo')
  }
}
