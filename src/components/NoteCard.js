import React from 'react'
import parse from 'html-react-parser';

const NoteCard = ({title, content}) => {
    return(
        <div className="flex flex-col border border-solid cursor-pointer rounded-md min-h-28 max-h-60 min-w-52 items-start p-[10px] truncate">
            <div className='font-bold'>{title}</div>
            <div>{parse(content)}</div>
        </div>
    )
}


export default NoteCard;