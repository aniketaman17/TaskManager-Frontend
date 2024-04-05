import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js"
import TokenContext from '../context/TokenContext.js';
function Login() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/login", formData)
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token })
            userDispatch({ type: "SET_USER", payload: result.data.user })
            localStorage.setItem("authToken",JSON.stringify(result.data.token))
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div>
            {userToken && <Navigate to="/" />}
            <section className="login-container">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form method='post' onSubmit={handleSubmit}>
                                
                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center font-semibold mx-4 mb-0"></p>
                                </div>
                                <div>
                                    {error && (
                                        <div className="text-center border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                                            {error.message}
                                        </div>
                                    )
                                    }
                                </div>
                                {/* Email input */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name='email'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="emailInput"
                                        placeholder="Email address" />
                                </div>
                                {/* Password input */}
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passInput"
                                        placeholder="Password" />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2" />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                                    </div>
                                    <Link
                                        to={"/forgotPassword"}
                                    >Forgot Password</Link>
                                </div>
                                <div className="text-center lg:text-left">
                                
                                    <button type='submit' onClick={handleSubmit} className="lg:w-[150px] font-burtons w-[100px] bg-black  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:from-[#0000] before:to-[rgb(104,100,228)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] " >Login</button>
                                    
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to={"/register"}
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;