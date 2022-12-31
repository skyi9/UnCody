import React, { useContext, useState } from 'react'
import PendingTask from './PendingTask'
import noteContext from '../Context/MyContext'


const Home = () => {

    const context = useContext(noteContext)
    const { addNote } = context

    const [state, setState] = useState({ task: "" })

    const onInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onclick = (e) => {
        e.preventDefault()
        addNote(state?.task)
    }
    return (
        <div>
            <h1 className="m-4 text-primary text-center">Uncody Todo List</h1>
            <form className="d-flex" role="search">
                <input onChange={onInput} value={state?.task} name='task' id='task' className="form-control me-2" style={{ flex: '7' }} type="text" placeholder="Your Task" aria-label="Search" />
                <button onClick={onclick} className="btn btn-primary " style={{ flex: '2' }} type="submit">Add Task</button>
            </form>

            <PendingTask />
        </div>
    )
}

export default Home
