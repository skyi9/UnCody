import React, { useContext } from 'react'
import NoteItem from './NoteItem'
import noteContext from '../Context/MyContext'

const CompletedTask = () => {

    const context = useContext(noteContext)
    const { compNotes, completedNotes } = context;
    return (
        <div className='row m-4'>
            <h4>Completed Tasks</h4>
            {
                compNotes.map((note, index) => {
                    return <div key={index} className='col-md-4'>
                        <NoteItem note={note} />
                    </div>
                })
            }

        </div>
    )
}

export default CompletedTask
