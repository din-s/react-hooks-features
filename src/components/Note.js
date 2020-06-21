import React, { useEffect }from 'react'

const Note=( { note, removeNote })=>{

    useEffect(()=>{
      console.log('note rendered')
  
      //below is equivalent code for "componentDidUnmount"
      //you have to return a function explicitly, this explicitly returned function specifies whoat to do when component did unmount
      return ()=>{
        console.log('Component did Unmount')
      }
    }, [])
    return (
      <div >
          <h3>{note.title}</h3>
        <p>{note.noteBody}</p>
          <button onClick={()=>removeNote(note.title)}>x</button>
          </div>
    )
  }
  
  export default Note;