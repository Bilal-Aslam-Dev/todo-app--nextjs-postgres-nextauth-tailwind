import { type FC, useRef } from 'react'

import { useTodos } from '@/hooks/useTodo'

import CustomButton from '@/components/shared/button/CustomButton'

import { Popup, CommonInput, FormikWrapper } from '@/components/shared'

import { todoSchema } from '@/utils/ValidationSchemas'

interface UpdateTodoIF {
  open: boolean
  handleOpen: () => void
  text: string
  id: string | number
  status: number
}

const UpdateTodo: FC<UpdateTodoIF> = ({
  open,
  handleOpen,
  text,
  id,
  status,
}) => {
  const { updateTodo } = useTodos()

  const inputRef: React.MutableRefObject<HTMLInputElement | undefined> =
    useRef()

  const handleSubmit = (values: any): any => {
    const { todo } = values

    updateTodo(id, { text: todo, status })
    handleOpen()
  }

  return (
    <CustomButton
      onClick={() => {
        setTimeout(() => {
          inputRef.current?.focus()
        }, 300)
        handleOpen()
      }}
    >
      <Popup handleOpen={handleOpen} open={open}>
        <FormikWrapper
          initialValues={{ todo: text }}
          onSubmit={handleSubmit}
          validationSchema={todoSchema}
        >
          <CommonInput
            inputRef={inputRef}
            inpName="todo"
            type="text"
            errorName="todo"
          />
          <button
            className="bg-[#99d8e1] hover:bg-cyan-300 transition-all py-3 mt-5 rounded-lg w-full text-white text-sm font-medium"
            type="submit"
          >
            Edit
          </button>
        </FormikWrapper>
      </Popup>
    </CustomButton>
  )
}

export default UpdateTodo
