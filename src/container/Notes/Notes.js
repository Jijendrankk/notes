import React from 'react';
import CreateNote from '../../components/CreateNote';
import NotesList from '../../components/NotesList';
import { useNotes } from '../../customHook/useNotes';
import noteIcon from '../../images/noteIcon.svg'

 
const Notes = () => {
    const {notes,addNote,updateNote,deleteNote} = useNotes()

    const handleAddNote = (note) => {
        const {title, content} = note
        const newNote = { createdAt: Date.now(), title, content  };
        addNote({...newNote});
    }

    const handleUpdateNote = (note) => {
        const {title,content,id} = note;
        const noteUpdate = { createdAt: Date.now(), title, content  };
        updateNote(id, noteUpdate)
    }

    const deleteNotes = (e,id) => {
        e.preventDefault();
        e.stopPropagation()
        deleteNote(id)
    }

    return(
        <div className='py-[5%] flex flex-col items-center gap-8 relative h-screen'>
        <CreateNote updateNotes={handleAddNote}/>
        <NotesList notes={notes} updateNotes={handleUpdateNote} handleDelete={deleteNotes}/>
        {notes.length === 0 ? 
        <div className='absolute top-[50%] left-[50%] flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2'>
            <img src={noteIcon} alt='noteIcon' className='opacity-30'/>
            <div className='text-[20px] opacity-70 font-medium'>Notes you add appear here</div>
            </div>:null}
        </div>
    )
}


export default Notes;