import type { FC } from 'react'

import Popup from './Popup'

import CustomButton from '../button/CustomButton'

import { TickIcon, CloseIcon } from '@/assets/icons'

interface ConfirmActionProps {
  open: boolean
  handleOpen: () => void
  onAccept: () => any
}

const ConfirmAction: FC<ConfirmActionProps> = ({
  open,
  handleOpen,
  onAccept,
}) => {
  return (
    <Popup
      size={'max-w-[90%] sm:max-w-[340px] min-w-0'}
      handleOpen={handleOpen}
      open={open}
    >
      <p>Are you sure you want to delete this todo?</p>
      <div className="flex items-center border-t mt-1.5">
        <CustomButton
          onClick={handleOpen}
          className="w-6/12 bg-red-300 bg-opacity-70 hover:bg-opacity-50 hover:bg-red-400 transition-all rounded-l h-full py-3 rounded-r-none"
        >
          <CloseIcon className="w-5 mx-auto" strokeWidth={2} />
        </CustomButton>
        <CustomButton
          onClick={onAccept}
          className="w-6/12 bg-green-300 bg-opacity-70 hover:bg-opacity-50 hover:bg-green-400 transition-all rounded-r h-full py-3  rounded-l-none"
        >
          <TickIcon className="w-5 mx-auto" strokeWidth={2} />
        </CustomButton>
      </div>
    </Popup>
  )
}

export default ConfirmAction
