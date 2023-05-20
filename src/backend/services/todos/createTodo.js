import prisma from '@/utils/prisma'

export const createTodo = async (todo, _res) => {
  try {
    if (!todo) return _res.status(403).send('Did not receive a todo')

    const newTodo = await prisma.todolist.create({
      data: {
        text: todo.text,
        user: {
          connect: { id: todo.userId }
        }
      }
    })

    if (newTodo) {
      return _res.status(200).send(newTodo)

    } else {
      _res.status(500).send('Could not create a todo.')

    }
  } catch (error) {
    _res.status(500).send('Could not create a todo.')
    
  }
}
