/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type FC, useState } from 'react'

import { CommonInput, PasswordInput, FormikWrapper } from '@/components/shared'
import { loginSchema } from '@/utils/ValidationSchemas'
import CustomButton from '@/components/shared/button/CustomButton'

import { signInHandlerClient } from '@/api-clients/auth/signIn'
import { Loader } from '@/assets/icons'

const SignInForm: FC = () => {
  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async (values: any): Promise<any> => {
    console.log(values)
    try {
     void await signInHandlerClient(values, setIsPosting)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <FormikWrapper
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <CommonInput inpName="email" type="email" errorName="email" />
        </div>

        <div className="mt-3">
          <label htmlFor="password">Password</label>
          <PasswordInput inpName="password" errorName="password" />
        </div>
        <CustomButton
          disabled={isPosting}
          className="mb-3 w-full py-3 text-sm capitalize font-medium tracking-wide hover:bg-blue-400 hover:bg-opacity-80 bg-blue-400 text-white rounded-lg mt-5 flex justify-center items-center"
          type="submit"
        >
          {isPosting && (
            <Loader className="animate-spin -ml-1 h-5 w-5 text-blue-200 mx-auto flex justify-end mr-1" />
          )}
          Sign in
        </CustomButton>
      </FormikWrapper>
    </>
  )
}

export default SignInForm
