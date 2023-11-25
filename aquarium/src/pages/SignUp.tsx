import LoginImagePage from '../assets/login-page-img.jpg'
import GoogleImage from '../assets/svgs/google-icon.svg'
import AppleImage from '../assets/svgs/apple-black.svg'
import { useState } from 'react'

const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const togglePassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div
      className="w-full flex h-screen justify-center items-center"
    >
      <div className="flex w-full  lg:w-[50%]">
      </div>
     
      </div>
  )
}

export default SignUp