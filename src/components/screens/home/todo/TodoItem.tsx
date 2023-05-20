import { type FC } from 'react'
import { useState } from 'react'

import { useTodos } from '@/hooks/useTodo'

import { CustomCheckBox, ConfirmAction } from '@/components/shared'
import { DeleteIcon, EditIcon } from '@/assets/icons'

import CustomButton from '@/components/shared/button/CustomButton'
import UpdateTodo from './updateTodo'

interface TodoItemProps {
  id: string
  text: string
  status: number
}

const TodoItem: FC<TodoItemProps> = ({ id, text, status }) => {
  const { deleteTodo, updateTodo } = useTodos()

  const [confirmAction, setConfirmAction] = useState<boolean>(false)

  const [openEditTodo, setOpenEditTodo] = useState<boolean>(false)
  const handleEditTodo = (): void => {
    setOpenEditTodo(!openEditTodo)
  }

  const handleOpenConfirmAction = (): void => {
    setConfirmAction(!confirmAction)
  }

  const updatedStatus = status === 1 ? 0 : 1

  return (
    <div className="w-full flex justify-between items-center relative mt-2">
      <div className="inline-flex items-center justify-between">
        <div className="relative">
          <CustomCheckBox
            isChecked={status}
            onChange={() => {
              updateTodo(id, { text, status: updatedStatus })
            }}
            id={id}
            color="blue"
          />
        </div>
        <p className="text-gray-900 break-all text-sm pr-2">{text}</p>
      </div>
      <UpdateTodo
        text={text}
        id={id}
        status={status}
        open={openEditTodo}
        handleOpen={handleEditTodo}
      />
      <div className="flex gap-1">
        <CustomButton onClick={handleEditTodo}>
          <EditIcon className="w-5 text-green-600" strokeWidth={1.7} />
        </CustomButton>
        <CustomButton onClick={handleOpenConfirmAction}>
          <DeleteIcon className="w-5 text-red-600" strokeWidth={1.7} />
          <ConfirmAction
            onAccept={() => {
              deleteTodo(id)
            }}
            open={confirmAction}
            handleOpen={handleOpenConfirmAction}
          />
        </CustomButton>
      </div>
    </div>
  )
}

export default TodoItem
