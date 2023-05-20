import type { FC, ReactNode } from 'react'

import { Dialog, DialogBody } from '@material-tailwind/react'

import CustomButton from '../button/CustomButton'

import { CloseIcon } from '@/assets/icons'
interface PopupTypes {
  open: boolean
  handleOpen: () => void
  children: ReactNode
  size?: string | undefined
}

const Popup: FC<PopupTypes> = ({ open, handleOpen, children, size }) => {
  const handleClickInside = (e: any): void => {
    e.stopPropagation()
  }
  return (
    <>
      <Dialog
        className={`w-full min-w-auto ${
          size ?? 'max-w-[90%] sm:max-w-[500px]'
        }`}
        open={open}
        handler={handleOpen}
        onClick={handleClickInside}
      >
        <DialogBody>
          <div className="relative w-full">
            <CustomButton className="flex ml-auto" onClick={handleOpen}>
              <CloseIcon className="w-5 text-gray-600" strokeWidth={3} />
            </CustomButton>
            <div className="pt-4">{children}</div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  )
}

export default Popup
