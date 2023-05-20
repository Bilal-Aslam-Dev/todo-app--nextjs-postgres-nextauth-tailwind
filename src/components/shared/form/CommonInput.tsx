import { type FC } from 'react'

import { Field, ErrorMessage } from 'formik'

interface IPType {
  inpName: string
  type: string
  errorName: string
  inputRef?: any | undefined
  placeholder?: string
}

const CommonInput: FC<IPType> = ({ inpName, type, errorName, inputRef, placeholder }) => {
  return (
    <>
      <Field
        innerRef={inputRef}
        className="block w-full text-gray-800 py-2.5 px-4 bg-slate-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-sm"
        placeholder={`Enter ${placeholder ?? inpName}`}
        name={inpName}
        type={type}
      />
      <span className="text-red-500 select-none text-xs font-medium">
        <ErrorMessage name={errorName} />
      </span>
    </>
  )
}

export default CommonInput
