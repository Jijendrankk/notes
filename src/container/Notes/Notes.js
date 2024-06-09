import React from 'react';
import CreateNote from '../../components/CreateNote';
import NotesList from '../../components/NotesList';
import { useNotes } from '../../customHook/useNotes';


 
const Notes = () => {
    const {notes,addNote} = useNotes()

    const handleAddNote = (note) => {
        const {title, content} = note
        const newNote = { createdAt: Date.now(), title, content  };
        addNote({...newNote});
    }

    return(
        <div className='pt-[5%] flex flex-col items-center gap-8'>
        <CreateNote updateNotes={handleAddNote}/>
        <NotesList notes={notes}/>
        </div>
    )
}


export default Notes;