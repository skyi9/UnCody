import React, { useContext } from 'react'
import NoteItem2 from './NoteItem2'
import noteContext from '../Context/MyContext'


const PendingTask = () => {

    const context = useContext(noteContext)
    const notes = context;

    return (
        <div className='row m-4'>
            <h4>Pending Tasks</h4>
            {
                notes?.notes?.map((note, index) => {
                    return <div key={index} className='col-md-4'>
                        <NoteItem2 note={note} />

                    </div>

                })
            }
        </div>
    )
}

export default PendingTask
