import React from 'react'
import parse from 'html-react-parser';
import deleteIcon from '../images/delete.svg'

const NoteCard = ({title, content,handleClick, handleDelete}) => {
    return(
        <div onClick={handleClick} className="flex flex-col border border-solid cursor-pointer rounded-md min-h-28 max-h-60 min-w-52 max-w-52 items-start p-[10px] truncate max-sm:w-[98%] max-sm:max-w-[98%] relative group">
            <div className='font-bold'>{title}</div>
            <div>{parse(content)}</div>
            <img onClick={handleDelete} src={deleteIcon} alt='deleteIcon' className='absolute w-[25px] h-[24px] bg-white cursor-pointer top-[2px] right-[2px] max-sm:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
    )
}


export default NoteCard;