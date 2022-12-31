import React from 'react'

const NoteItem = (props) => {

    const { note } = props
    return (

        <div >
            <div className="card shadow m-3">
                <div className="card-body">
                    <h5 className="card-title text-center">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">{note?.date}</h6>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
