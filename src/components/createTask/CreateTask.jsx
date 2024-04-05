import React, { useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import "./createTask.css"
function CreateTask() {
    const { dispatch } = useContext(TaskContext)
    const {userToken} = useContext(TokenContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [toast, setToast] = useState();
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/addTask", {title, description},{
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            })
            //setToast(res.data)
            // showToast();
          } catch (error) {
            console.log(error);
          }
        dispatch({
            type: "ADD_TASK",
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    // const showToast = () => {
    //     const toast = document.getElementById('toast');
    //     toast.style.display = "block"
    //     setTimeout(hideToast,2000)
    // }
    // const hideToast = () => {
    //     const toast = document.getElementById('toast');
    //     toast.style.display = "none"
    // }
    return (
        <div className="addContainer md:w-1/3 md:mx-auto mx-3 mt-3 flex justify-center">
            <div className='w-11/12'>
                <form onSubmit={handleAdd}>
                    <div>
                        <label htmlFor="title" className='font-bold'>Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className='font-bold bg-slate-100 border border-gray-300 text- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-vi dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="description" className='font-bold'>Description</label>
                        <textarea
                            rows={5}
                            name="description"
                            id="description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ resize: "none" }}
                            className=' font-bold bg-slate-100 border border-gray-300 text- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-vi dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='flex justify-center'>
                    <button className="lg:w-[150px] font-burtons w-[100px] bg-black  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:from-[#0000] before:to-[rgb(104,100,228)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" >Add</button>


                    </div>
                </form>
                <div className="toast bg-green-600 text-white p-3 rounded-xl shadow-2xl text-center absolute bottom-4 left-1/2 -translate-x-1/2" id='toast'>
                    <p>This is test</p>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;