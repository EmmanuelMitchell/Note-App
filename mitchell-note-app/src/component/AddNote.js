import React from 'react'
import { useState } from 'react'

const AddNote = ({ handleAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const reduseCharacter = 200;


  const handleClick = (event) => {
    if(reduseCharacter - event.target.value.length >=0){
      setNoteText(event.target.value);
    }
      
  }


  const handleSaveText = () =>{
    if(noteText.trim().length > 0){
      handleAddNote(noteText)
      setNoteText('')
    }
    
    
   
  }

  return (
    <div className='note  new'>
      
      <textarea 
      rows='8'
      cols='10'
      placeholder='Please add not hear'
      value={noteText} 
      onChange={handleClick}
        >
      </textarea>

      <div className='note-footer'>
       <small>{reduseCharacter - noteText.length} </small>
       <button onClick={handleSaveText} className='save'>Save</button>
      </div>

    </div>
  )
}

export default AddNote
