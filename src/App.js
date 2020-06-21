import React, { useState, useEffect } from 'react';
import Note from './components/Note'
import './App.css';

const NotesApp=()=>{

  const [ notes, setNotes ] = useState([])
  const [ title, setTitle ] = useState('')
  const [noteBody, setNoteBody] = useState('')

  useEffect(()=>{
  const fromLocalstorage = JSON.parse(localStorage.getItem('notes')) 
    
  if(fromLocalstorage){
    setNotes(fromLocalstorage)
  }
  },[])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])

  const addNote = (e)=>{
    e.preventDefault()
    setNotes([
      ...notes,
      { title,
      noteBody }
    ])

    setTitle('')
    setNoteBody('')
  }

  const removeNote =(title)=>{
    setNotes(
      notes.filter((note)=>
      note.title !== title
       
    ))
  }

  return (
    <div>
      <h2>Notes</h2>
  <p>current notes length: {notes.length}</p>
      {notes.map((note,index)=>(
        <Note key={index} note={note} removeNote={removeNote}/>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input placeholder='Title' value={title}onChange={(e)=>setTitle(e.target.value)}/>
        <textarea value={noteBody}onChange={(e)=>{
          setNoteBody(e.target.value)
        }}></textarea>
        <button >Add note</button>
      </form>
    </div>
  )
}



export default NotesApp;
