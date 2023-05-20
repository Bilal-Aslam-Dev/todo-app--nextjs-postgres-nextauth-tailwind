import { getAllTodos } from '@/backend/services/todos'

export const getAllTodosController = async (_req, _res) => {
  try {
    return await getAllTodos(_req, _res)
  } catch (error) {
    return _res.status(500).send('Could not get data.')
  }
}
