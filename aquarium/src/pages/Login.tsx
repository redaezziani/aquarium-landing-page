import LoginImagePage from '../assets/login-page-img.jpg'
import GoogleImage from '../assets/svgs/google-icon.svg'
import AppleImage from '../assets/svgs/apple-black.svg'
import { useState } from 'react'
const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const togglePassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div
            className="w-full flex h-screen justify-center items-center"
        >
            <div className="flex w-full  lg:w-[50%]">
                <img
                    className='w-1/2 aspect-auto rounded-md object-cover'
                    src={LoginImagePage}
                    alt='login page image'
                />
                <div className="flex w-1/2 mt-8 flex-col justify-start items-center gap-2">
                    <h1
                        className='text-4xl font-semibold text-gray-700'
                    >
                        Welcome Back
                    </h1>
                    <p
                        className='text-gray-500'
                    >
                        Login to your account
                    </p>
                    <form
                        className='flex w-full p-6 flex-col gap-4 mt-4'
                    >
                        <div className="flex justify-start items-center border-2 text-slate-400 border-gray-300 rounded-md px-4 py-2 ">

                            <input
                                className='w-full outline-none py-1.5'
                                type="email"
                                placeholder='Email'
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                        </div>
                        <div className="flex justify-start items-center border-2 text-slate-400 border-gray-300 rounded-md px-4 py-2 ">
                            <input
                                className='w-full outline-none py-1.5'
                                type={isShowPassword ? "text" : "password"}
                                placeholder='Password'
                            />
                            {
                                isShowPassword ? (
                                    <svg

                                        onClick={togglePassword}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>)
                                    : (
                                        <svg
                                            onClick={togglePassword}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cu h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>

                                    )
                            }

                        </div>
                        <button
                            className='bg-red-500 mt-4 text-white rounded-md px-4 py-3'
                        >
                            Login
                        </button>

                        <div className="flex w-full justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label
                                    htmlFor="remember"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="#"
                                className='text-red-500'
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            className='flex mt-3 w-full gap-2 justify-center items-center bg-white border-2 border-gray-300 rounded-md px-4 py-2'
                        >
                            <img
                                className='w-5 h-5'
                                src={GoogleImage}
                                alt="google icon"
                            />
                            <p
                                className='text-gray-700'
                            >
                                Login with Google
                            </p>
                        </button>

                        <button
                            className='flex w-full gap-2 justify-center items-center bg-white border-2 border-gray-300 rounded-md px-4 py-2'
                        >
                            <img
                                className='w-5 h-5'
                                src={AppleImage}
                                alt="apple icon"
                            />
                            <p
                                className='text-gray-700'
                            >
                                Login with Apple
                            </p>
                        </button>
                    </form>



                </div>
            </div>
        </div>
    )
}

export default Login