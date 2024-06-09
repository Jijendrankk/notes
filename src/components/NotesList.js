import React from 'react';
import NoteCard from "./NoteCard"

const NotesList = ({notes}) => {

    const renderNotes = () => {
        return notes.map(note=> <NoteCard title={note?.title} content={note?.content}/>)
    }

    return(
        <div className='flex flex-wrap gap-5 w-[80%] justify-start max-sm:justify-center'>
            {renderNotes()}
        </div>
    )
}


export default NotesList