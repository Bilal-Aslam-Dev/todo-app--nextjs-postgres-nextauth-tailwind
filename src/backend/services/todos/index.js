import prisma from '@/utils/prisma'

export const getAllTodos = async (_req, _res) => {

  try {
    const res = await prisma.todolist.findMany({
      where: {
        userId: parseInt(_req.query.id),
      },
    })

    return _res.status(200).send(res)

  } catch (error) {
    _res.status(500).send('Could not get data')

  }
}
