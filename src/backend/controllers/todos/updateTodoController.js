import { updateTodo } from '@/backend/services/todos/updateTodo'

export const updateTodoController = async (_req, _res) => {
  try {
    const { text, status } = _req.body
    if (!text && !status) {
      return _res
        .status(401)
        .send('Body should include updated text and status')
    }

    if (
      status.length > 1 ||
      (JSON.parse(status) !== 0 && JSON.parse(status) !== 1)
    ) {
      return _res.status(401).send('Status should be only 0 or 1')
    }

    return await updateTodo(_req, _res)
  } catch (error) {
    _res.status(501).send('Could not update todo')
  }
}
