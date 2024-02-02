import React from 'react'

function TodoCard({ dispatch, setActiveCard, data }) {
    return (
        <div className='w-full h-full my-2 mx-0 sm:mx-3 sm:w-auto sm:min-h-[330px] rounded-[20px] '>
            <div className='flex py-5 flex-col rounded-t-[7px] h-auto items-center justify-center px-3 bg-zinc-200'>
                <div className='w-full text-center sm:text-left'>
                <h3 className='text-3xl truncate font-bold'>{data.title}</h3>
                </div>
                <p className='my-1 w-full truncate text-center sm:text-left'>{data.description}
                </p>
            </div>
            <div className='flex justify-center flex-col sm:flex-row sm:justify-end items-center rounded-b-[7px] p-4 bg-zinc-300 h-auto'>
                <button onClick={() => {
                    setActiveCard(data)
                    dispatch({type: 'edit'})
                }} className='mx-3 sm:mx-1 text-xl w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-6 bg-[#f6b819] hover:bg-yellow-700'>Edit</button>
                <button onClick={() => {
                    setActiveCard(data)
                    dispatch({type: 'delete'})
                }} className='mx-3 sm:mx-1 mt-4 sm:mt-0 text-xl w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-5 bg-[#f6b819] hover:bg-yellow-700'>Delete</button>
            </div>
        </div>
    )
}
export default TodoCard