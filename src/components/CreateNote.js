import React,{useEffect, useRef, useState} from 'react';
import CustomEditor from './CustomEditor';
import useOutsideClick from '../customHook/useOutsideClick';
// import { useNotes } from '../customHook/useNotes';


const CreateNote = ({updateNotes}) => {
    const [showAddNotes, setAddNotes] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        if (showAddNotes) {
            setAddNotes(false);
            if(title !== '' || content !== '') updateNotes({title,content})
        }
      });

    useEffect(()=>{
        if(title !== '' || content !== '') {
            setTitle('');
            setContent('')
        }
    },[showAddNotes])


    const handleAddNotes = () => {
        setAddNotes(!showAddNotes)
    }

    const handleNotesChanges = (value, type='title') => {
        if(type === 'title') setTitle(value)
        else setContent(value)
    }

    const renderCreateNote = () => {
        return (
            <div ref={ref} className='w-[50%] max-sm:w-[90%] border border-solid flex items-center cursor-pointer rounded-md shadow-md flex-col'>
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
            </div>
        )
    }
    return(
        <div className='w-full flex justify-center'>
            {showAddNotes ? 
            renderCreateNote()
            :<div onClick={handleAddNotes} className='w-[50%] h-[40px] max-sm:w-[90%] border border-solid flex items-center pl-[1%] cursor-pointer rounded-md shadow-md font-medium text-[#202124]'>Take a note...</div>}
        </div>
    )
}


export default CreateNote