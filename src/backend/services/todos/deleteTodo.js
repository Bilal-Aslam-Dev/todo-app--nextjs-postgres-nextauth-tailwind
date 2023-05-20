import prisma from '@/utils/prisma'

export const deleteTodo = async (_req, _res) => {
  try {
    const todoId = _req.query.id
    const userId = _req.body.userId

    const result = await prisma.todolist.delete({
      where: {
        id_userId: {
          id: parseInt(todoId),
          userId: parseInt(userId)
        }
      }
    })

    if (result) {
      return _res.status(200).send('Todo deleted successfully.')
    } else {
      return _res.status(404).send('Todo does not exist.')
    }
  } catch (error) {
    _res.status(500).send('Could not delete a todo.')
  }
}
