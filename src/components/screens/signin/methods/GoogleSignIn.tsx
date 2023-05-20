import type { FC } from 'react'

import Image from 'next/image'

import { signIn } from 'next-auth/react'
import { GoogleIcon } from '@/assets/images'

const GoogleSignIn: FC = () => {
  return (
    <button
      className="w-full py-4 px-6 hover:shadow-lg text-white font-semibold rounded-lg shadow-md transition duration-300 mt-8"
      onClick={async () => {
        await signIn('google')
      }}
    >
      <div className="flex items-center justify-center relative">
        <Image
          className="max-w-[25px] sm:max-w-[31px] w-full absolute left-0 top-[50%] translate-y-[-50%]"
          src={GoogleIcon}
          alt="Google Icon"
        />
        <p className="text-gray-700 font-medium text-sm">Sign in with Google</p>
      </div>
    </button>
  )
}

export default GoogleSignIn
