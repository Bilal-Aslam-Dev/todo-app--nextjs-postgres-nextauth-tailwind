import { type FC, useState, useRef } from 'react'
import { AddIcon } from '@/assets/icons'

import { useTodos } from '@/hooks/useTodo'

import CustomButton from '@/components/shared/button/CustomButton'

import { Popup, CommonInput, FormikWrapper } from '@/components/shared'

import { todoSchema } from '@/utils/ValidationSchemas'

const AddTodo: FC = () => {
  const { createTodo } = useTodos()

  const inputRef: React.MutableRefObject<HTMLInputElement | undefined> =
    useRef()

  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = (): void => {
    setOpen(!open)
  }

  const handleSubmit = (values: any): any => {
    const { todo } = values

    createTodo({ text: todo })
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
          initialValues={{ todo: '' }}
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
            Add
          </button>
        </FormikWrapper>
      </Popup>
      <div className="bg-[#97d9e1] bg-opacity-90 p-4 rounded-full">
        <AddIcon className="w-5 text-white" strokeWidth={3} />
      </div>
    </CustomButton>
  )
}

export default AddTodo
