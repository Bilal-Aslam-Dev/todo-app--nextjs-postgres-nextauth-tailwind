import { type FC, useState } from 'react'
import Link from 'next/link'

import { CommonInput, PasswordInput, FormikWrapper } from '@/components/shared'
import { signUpSchema } from '@/utils/ValidationSchemas'
import CustomButton from '@/components/shared/button/CustomButton'

import { signUpHandlerClient } from '@/api-clients/auth/signup'
import { Loader } from '@/assets/icons'

const SIgnUpForm: FC = () => {
  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm?: () => void }
  ): Promise<any> => {
    try {
      await signUpHandlerClient(values, resetForm, setIsPosting)
      setIsPosting(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Link href="/" className="self-start w-full text-blue-500 mb-4 block">
        Go back ←
      </Link>
      <FormikWrapper
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      >
        <h1 className="text-2xl font-semibold mb-5 text-center">Signup</h1>
        <div className="mt-3">
          <label className='text-sm' htmlFor="fullName">Full Name</label>
          <CommonInput placeholder="Full Name" inpName="fullName" type="text" errorName="fullName" />
        </div>

        <div className="mt-3">
          <label className='text-sm' htmlFor="email">Email</label>
          <CommonInput placeholder="Email Address" inpName="email" type="email" errorName="email" />
        </div>

        <div className="mt-3">
          <label className='text-sm' htmlFor="password">Password</label>
          <PasswordInput inpName="password" errorName="password" placeholder="Password" />
        </div>

        <div className="mt-3">
          <label className='text-sm' htmlFor="confirmPassword">Confirm Password</label>
          <PasswordInput
            inpName="confirmPassword"
            errorName="confirmPassword" placeholder="Confirm Password"
          />
        </div>
        <CustomButton
          disabled={isPosting}
          className="mb-3 w-full py-3 text-sm capitalize font-medium tracking-wide hover:bg-blue-400 hover:bg-opacity-80 bg-blue-400 text-white rounded-lg mt-5 flex justify-center items-center"
          type="submit"
        >
          {isPosting && (
            <Loader className="animate-spin -ml-1 h-5 w-5 text-blue-200 mx-auto flex justify-end mr-1" />
          )}
          Sign Up
        </CustomButton>
      </FormikWrapper>
    </>
  )
}

export default SIgnUpForm
