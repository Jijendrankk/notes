import React,{useRef, useState} from 'react';
import NoteCard from "./NoteCard"
import CustomEditor from './CustomEditor';
import useOutsideClick from '../customHook/useOutsideClick';

const NotesList = ({notes,updateNotes,handleDelete}) => {
    const [selectedNote, setSelectedNote] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        if (selectedNote !== '') {
            if(title !== '' || content !== '') updateNotes({title,content,id:selectedNote?.createdAt})
            setSelectedNote('');
        }
      });

    const handleClick = (note) => {
        setSelectedNote(note);
        setTitle(note?.title || '');
        setContent(note?.content || '')
    }


    const handleNotesChanges = (value, type) => {
        if(type === 'title') setTitle(value)
        else setContent(value)
    }

    

    const renderUpdateNote = () => {
        const d = new Date(selectedNote?.createdAt || '')
        return (
            <div ref={ref} className='w-full border border-solid flex items-center cursor-pointer rounded-md shadow-md flex-col relative'>
                <input 
                type='text' 
                value={title} 
                onChange={(e)=>handleNotesChanges(e.target.value, 'title')}
                className='outline-none font-semibold w-full h-[40px] pl-[1%] placeholder-[#202124] placeholder-opacity-75'
                placeholder='Title'
                />
                <div className='mt-[5px] w-full'>
                    <CustomEditor handleChange={(value)=> handleNotesChanges(value,'editorContent' )} content={content} placeHolder='Take a note...'/>
                </div>
                <div className='absolute bottom-2 right-1 text-[12px]'>Edited: {d.toLocaleString()}</div>
            </div>
        )
    }

    const renderModal = () => {
        return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center overflow-hidden">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[60%] overflow-auto max-sm:w-[98%]">
        {renderUpdateNote()}
      </div>
    </div>)
    }

    const renderNotes = () => {
        return notes.map(note=> <NoteCard title={note?.title} content={note?.content} handleDelete={(e)=> handleDelete(e,note?.createdAt)} handleClick={()=>handleClick(note)}/>)
    }

    return(
        <div className='flex flex-wrap gap-5 w-[80%] justify-start max-sm:justify-center'>
            {renderNotes()}
            {selectedNote !=='' ? renderModal() : null}
        </div>
    )
}


export default NotesList