import { useState } from 'react'
import MyContext from './MyContext'

const MyContextState = (props) => {

    let date = new Date("2022-12-31T00:00:00");
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    const tasks = [
        {
            '_id': Math.random() * 10000,
            'title': 'Task1',
            'date': dateMDY
        },
    ]

    const [notes, setNotes] = useState(tasks)

    const addNote = (title) => {
        const note = {
            '_id': Math.random() * 10000,
            'title': title,
            'date': dateMDY
        }
        setNotes(notes.concat(note))
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    const completedTasks = [
        {
            '_id': Math.random() * 10000,
            'title': 'Completed Task',
            'date': dateMDY
        },
    ]

    const [compNotes, setCompNotes] = useState(completedTasks)

    const completedNotes = (id, title) => {
        const note = {
            '_id': Math.random() * 10000,
            'title': title,
            'date': dateMDY
        }
        deleteNote(id)
        setCompNotes(compNotes.concat(note))
    }

    return (
        <MyContext.Provider value={{ notes, addNote, deleteNote, compNotes, completedNotes }}>
            {props.children}
        </MyContext.Provider >
    )
}

export default MyContextState;