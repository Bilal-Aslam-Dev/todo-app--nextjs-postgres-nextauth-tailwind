import prisma from '@/utils/prisma'

export const updateTodo = async (_req, _res) => {
  try {
    const { id } = _req.query
    const { text, status, userId } = _req.body

    const updatedTodo = await prisma.todolist.update({
      where: { 
        id_userId: { 
          id: parseInt(id), 
          userId: parseInt(userId) 
        } 
      },
      data: { text, status: parseInt(status) },
    });

    return _res.status(200).send(updatedTodo)

  } catch (error) {
    _res.status(500).send('Could not update todo.')

  }
}
