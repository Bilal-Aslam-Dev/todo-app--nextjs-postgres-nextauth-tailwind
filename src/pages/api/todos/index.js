import { getAllTodosController } from '@/backend/controllers/todos'

export default async (_req, _res) => {
  if (_req.method === 'GET') {
    return await getAllTodosController(_res)
  } else {
    _res.status(500).send('Method not allowed')
  }
}
