import { useEffect, useState, useContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'
import EditCard from './components/EditCard'
import Context from '../ContextWrapper'

function Mainpage() {

    function reducer(state, action) {
        switch (action.type) {
            case 'create':
                return { type: state.type = 'create' }
            case 'edit':
                return { type: state.type = 'edit' }
            case 'delete':
                return { type: state.type = 'delete' }
            case 'reset':
                return { type: state.type = '' }
            default:
                return state
        }
    }

    const { email } = useContext(Context)
    const [filteredCards, setFilteredCards] = useState([])
    const [cards, setCards] = useState([])
    const [activeCard, setActiveCard] = useState()
    const [state, dispatch] = useReducer(reducer, { type: '' })

    useEffect(() => {
        const getCards = async () => {
            const request = await fetch(`http://localhost:3000/cards/${email}`);
            const response = await request.json()
            setCards(response);
        }

        getCards()
    }, [cards])

    useEffect(() => {
        setFilteredCards(cards.filter((card) => card.author === email));
    }, [cards])

    return (
        <div className={`relative h-screen ${state.type ? 'overflow-hidden' : ''}`}>

            {state.type === "create" ?
                <div className='fixed inset-0 flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black'>
                    <CreateCard dispatch={dispatch} email={email} />
                </div> : null
            }

            {state.type === "edit" ?
                <div className='fixed inset-0 flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black'>
                    <EditCard activeCard={activeCard} dispatch={dispatch} />
                </div> : null
            }

            {state.type === "delete" ?
                <div className='fixed inset-0 flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black'>
                    <DeleteCard activeCard={activeCard} dispatch={dispatch} />
                </div> : null
            }

            <Navbar />
            <div className='mx-2 lg:mx-5 px-2'>
                <button onClick={() => dispatch({ type: 'create' })} className='w-full sm:w-max px-4 sm:px-5 py-2 sm:py-3 m my-2 sm:my-3 text-bold border rounded-[15px] bg-amber-400 hover:bg-amber-500'>Create Card</button>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 p-2 lg:p-5'>
                {filteredCards.length ? filteredCards.map((card) => (<TodoCard setActiveCard={setActiveCard} dispatch={dispatch} key={card.id} data={card} />)

                ) : <p className='col-span-3 text-center font-bold'>No cards found</p>}
            </div>
        </div>
    )
}

export default Mainpage