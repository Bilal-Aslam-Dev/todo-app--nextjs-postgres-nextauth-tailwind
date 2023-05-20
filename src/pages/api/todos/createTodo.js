import { createTodoController } from '@/backend/controllers/todos/createTodoController'

export default async (_req, _res) => {
  if (_req.method === 'POST') {
    return await createTodoController(_req, _res)
  } else {
    _res.status(403).send({ error: 'Method not Allowed' })
  }
}
