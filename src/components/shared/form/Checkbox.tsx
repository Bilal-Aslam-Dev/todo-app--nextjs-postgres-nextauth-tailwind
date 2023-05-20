import { type FC } from 'react'

import { Checkbox, type CheckboxProps } from '@material-tailwind/react'

type CustomCheckboxProps = CheckboxProps & {
  color?: string | undefined
  id: string
  isChecked: number
  onChange: () => void
}

const CustomCheckBox: FC<CustomCheckboxProps> = ({
  color,
  id,
  onChange,
  isChecked,
}) => {
  return (
    <Checkbox
      id={id}
      color={color ?? 'indigo'}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-9 h-9 p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      }
      onChange={e => {
        onChange(e)
      }}
      checked={isChecked === 1 ?? false}
    />
  )
}

export default CustomCheckBox
