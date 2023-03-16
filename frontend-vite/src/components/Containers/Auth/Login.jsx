import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from '../../../lib/axios'
import bindingState from '../../../lib/bindingState'

const ContainerLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [notifiedSuccess, setNotifiedSuccess] = useState(0);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const sendData = { ...data }

        try {
            axios.post("/user/login", sendData)
                .then((res) => {
                    if (res.data.logged === true) {
                        setNotifiedSuccess(1);

                        switch (res.data.role) {
                            case "admin":
                                localStorage.setItem("token", res.data.token)
                                localStorage.setItem("user", JSON.stringify(res.data.data))
                                navigate("/")
                                break;

                            case "kasir":
                                localStorage.setItem("token", res.data.token)
                                localStorage.setItem("user", JSON.stringify(res.data.data))
                                navigate("/")
                                break;

                            default:
                                localStorage.setItem("token", res.data.token)
                                localStorage.setItem("user", JSON.stringify(res.data.data))
                                navigate("/")
                                break;
                        }
                    } else {
                        setNotifiedSuccess(2);
                        console.log(err);
                    }
                })
                .catch((err) => {
                    setNotifiedSuccess(2);
                    console.log(err);
                })
        } catch (err) {
            setNotifiedSuccess(2);
            console.log(err);
        }
    }

    return (
        <section>
            <div className="max-w-7xl mx-auto">
                <div className="container">
                    <div className="flex flex-wrap">
                        {/* Form Component */}
                        <div className="w-full md:w-1/2 p-10 lg:p-20">
                            {/* Greetings */}
                            <div className="mb-16">
                                <h1 className="font-bold text-[36px] leading-[43.2px]">
                                    Login
                                </h1>

                                <p className="font-medium text-[16px] leading-[19.2px] mt-2">
                                    Nice to see you again 👋
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {notifiedSuccess === 1 && (
                                    <div className="mb-4 bg-green-500 p-3 rounded">
                                        <p className="text-white text-sm font-bold">
                                            Login Sukses, Selamat datang kembali!
                                        </p>
                                    </div>
                                )}

                                {notifiedSuccess === 2 && (
                                    <div className="mb-4 bg-red-500 p-3 rounded">
                                        <p className="text-white text-sm font-bold">
                                            Username atau Password salah, silakan coba kembali!
                                        </p>
                                    </div>
                                )}

                                <div className="flex flex-col">
                                    <label htmlFor="username" className="font-semibold">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="mt-2 p-3 border-2 border-[#070708]"
                                        placeholder="Enter your Username"
                                        required
                                        value={data.username}
                                        onChange={(e) => bindingState(e, setData, "username")}
                                    />
                                </div>

                                <div className="flex flex-col mt-5">
                                    <label htmlFor="password" className="font-semibold">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="mt-2 p-3 border-2 border-[#070708]"
                                        placeholder="Enter your password"
                                        required
                                        value={data.password}
                                        onChange={(e) => bindingState(e, setData, "password")}
                                    />
                                </div>

                                <div className="flex flex-col mt-5">
                                    <button
                                        type="submit"
                                        className="bg-[#070708] hover:bg-[#1f1f24] text-white font-bold py-3 px-4"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>

                            {/* Sign Up */}
                            {/* <div className="flex items-center justify-center mt-5">
                                <p className="text-sm text-center">Don’t have an account ?</p>

                                <Link
                                    to="/signup"
                                    className="text-sm text-center font-semibold ml-2"
                                >
                                    Sign Up for Free
                                </Link>
                            </div> */}
                        </div>

                        {/* Image Component */}
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://qph.cf2.quoracdn.net/main-qimg-c59d714b11d9bdd254dc02293ea7c392-lq"
                                    alt="Login"
                                    className="w-full md:h-screen object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerLogin