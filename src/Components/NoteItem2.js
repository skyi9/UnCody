import React, { useContext } from 'react'
import noteContext from '../Context/MyContext'


const NoteItem2 = (props) => {

    const context = useContext(noteContext)
    const { deleteNote, completedNotes } = context;

    const { note } = props

    return (
        <div className='m-3'>
            <div className="card shadow mb-2">
                <div className="card-body">
                    <h5 className="card-title text-center">{note?.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">{note?.date}</h6>
                </div>
            </div>
            <div className='d-flex'>
                <button onClick={() => { completedNotes(note._id, note.title) }} type="button" className="btn btn-outline-primary me-2">Completed</button>
                <button onClick={() => { deleteNote(note._id) }} type="button" className="btn btn-outline-primary">Delete &#128473;</button>
            </div>
        </div>
    )
}

export default NoteItem2
