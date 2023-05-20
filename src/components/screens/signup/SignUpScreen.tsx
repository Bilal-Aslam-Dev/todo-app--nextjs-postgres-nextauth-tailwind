import type { FC } from 'react'

import SignUpForm from './form/SIgnUpForm'

const SignUpScreen: FC = () => {
  return (
    <div className="bg-[#f5f5f5] w-screen lg:py-10 py-5 2xl:h-screen flex flex-col justify-center items-center px-3">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 pb-8 rounded-lg shadow-md mb-3">
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUpScreen
