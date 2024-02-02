import { useState } from 'react'
function EditCard({ dispatch, setCards, activeCard }) {
    const [formData, setFormData] = useState({
        title: activeCard.title,
        description: activeCard.description,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSave = (e) => {
        e.preventDefault()
        const updatedCard = { ...activeCard, ...formData };
        setCards((prevValue) => prevValue.map(card => card.id === activeCard.id ? updatedCard : card))
        dispatch({ type: 'reset' });
    };
    return (
        <div className=' flex flex-col justify-center sm:justify-around px-5 sm:px-20 py-10 items-center w-screen sm:w-[700px] h-screen sm:max-h-[420px] sm:rounded-[13px]  bg-white relative'>
            <button onClick={() => dispatch({ type: 'reset' })} className='w-5 h-5 bg-red-600 rounded-full absolute top-[10px] right-[10px]'></button>
            <h3 className='text-2xl font-bold'>EDIT CARD</h3>
            <div className='flex flex-col mt-5 text-center sm:text-left w-full'>
                <label className='text-xl text-zinc-400' htmlFor="">Title</label>
                <input required onChange={(e) => handleChange(e)} value={formData.title} className='py-3 px-2 mt-2 border rounded-[6px]' type="text" name="title" />
                <label className='text-xl mt-2 text-zinc-400' htmlFor="">Description</label>
                <input required onChange={(e) => handleChange(e)} value={formData.description} className='py-3 px-2 mt-2 border rounded-[6px]' type="text" name="description" id="" />
            </div>
            <div className='flex justify-center sm:justify-end sm:items-center w-full mt-5'>
                <button onClick={() => dispatch({ type: 'reset' })} className='px-5 py-3 border rounded-[15px] mx-2 bg-white hover:bg-[#DFDFDF]'>Close</button>
                <button onClick={(e) => handleSave(e)} className='px-5 py-3 border rounded-[15px] mx-2 bg-amber-400 hover:bg-amber-500'>Save</button>
            </div>
        </div>
    )
}
export default EditCard