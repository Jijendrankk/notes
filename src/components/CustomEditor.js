import '../container/Notes/Notes.scss'
import { 
    BtnBold,
    BtnItalic,
    BtnUndo,
    BtnRedo,
    Editor,
    EditorProvider,
    Toolbar
  } from 'react-simple-wysiwyg';

const CustomEditor = ({handleChange=()=>{}, content='',placeHolder='Take a note'}) => {
    return(
        <div className='relative'>
        {content === '' && (
        <div className="absolute top-0 left-0 w-full h-full flex items-start pointer-events-none p-2 font-medium text-[#202124] text-[15px]">
          {placeHolder}
        </div>
      )}
<EditorProvider>
        <Editor value={content} onChange={(e)=>handleChange(e.target.value)}>
          <Toolbar>
          <BtnUndo/>
            <BtnRedo/>
            <BtnBold />
            <BtnItalic />
          </Toolbar>
        </Editor>
      </EditorProvider>
        </div>
        
    )
    
}


export default CustomEditor


