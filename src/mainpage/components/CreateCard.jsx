import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

function CreateCard({ dispatch, setCards, email }) {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value,
            author: email,
            id: uuidv4(),
        }))
    }

    const createCard = (e) => {
        e.preventDefault();
        setCards((prevValue) => [...prevValue, formData])
        dispatch({ type: 'reset' })
    }

    return (
        <form className='flex flex-col justify-center sm:justify-around px-5 sm:px-20 py-10 items-center w-screen sm:w-[700px] h-screen sm:max-h-[420px] sm:rounded-[13px] bg-white relative'>
            <button onClick={() => dispatch({ type: 'reset' })} className="w-5 h-5 bg-red-600 rounded-full absolute top-[10px] right-[10px]"></button>
            <h3 className='text-2xl font-bold'>CREATE CARD</h3>
            <div className='flex text-center mt-5 sm:text-left flex-col w-full'>
                <label className='text-xl text-zinc-400' htmlFor="title">Title</label>
                <input onChange={(e) => handleChange(e)} name='title' required className='py-3 px-2 mt-2 border rounded-[6px]' type="text" id="" />
                <label className='text-xl mt-2 text-zinc-400' htmlFor="description">Description</label>
                <input onChange={(e) => handleChange(e)} name='description' required className='py-3 px-2 mt-2 border rounded-[6px]' type="text" id="" />
            </div>
            <div className='flex justify-center sm:justify-end sm:items-center w-full mt-5'>
                <button onClick={() => dispatch({ type: 'reset' })} className='px-5 py-3 border rounded-[15px]  mx-2 bg-white hover:bg-[#DFDFDF]'>Close</button>
                <button onClick={(e) => { createCard(e) }} className='px-5 py-3 border rounded-[15px] mx-5 bg-amber-400 hover:bg-amber-500'>Create</button>
            </div>
        </form>
    )
}
export default CreateCard