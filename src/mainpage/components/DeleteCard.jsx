function DeleteCard({ dispatch, activeCard }) {
    const deleteCard = async () => {
        try {
            const request = await fetch(`http://localhost:3000/cards/${activeCard}`,
            {
                method: "DELETE",
                mode: "cors"
            })
            const response = await request.json()
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleDelete = async (e) => {
        e.preventDefault();
        deleteCard();
        dispatch({ type: 'reset' });
    }

        return (
            <div className=' flex flex-col justify-center text-center sm:justify-around px-5 sm:px-20 py-10 items-center w-screen sm:w-[700px] h-screen sm:max-h-[240px] sm:rounded-[13px]  bg-white relative'>
                <button onClick={() => dispatch({ type: 'reset' })} className="w-5 h-5 bg-red-600 rounded-full absolute top-[10px] right-[10px]"></button>
                <h3 className='text-2xl font-bold'>DELETE CARD</h3>
                <p className='text-zinc-400 my-5'>Are you sure you want to delete card “Card name”?</p>
                <div>
                    <button onClick={() => dispatch({ type: 'reset' })} className='px-5 py-3 border rounded-[15px] mx-2 bg-white hover:bg-[#DFDFDF]'>Close</button>
                    <button onClick={async(e) => await handleDelete(e)} className='px-5 py-3 border rounded-[15px] mx-2 bg-amber-400 hover:bg-amber-500'>Delete</button>
                </div>
            </div>
        )
    }

    export default DeleteCard