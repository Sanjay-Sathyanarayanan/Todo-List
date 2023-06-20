import React from 'react'
import Notes from './Notes'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import { IoIosAddCircleOutline } from 'react-icons/io'

const CreateNote = () => {

    const [note, setNote]=useState({
        text:"",
        isCompleted:false,
        id:uuid()
    
    })

    const [todoList,setTodoList]=useState([])

    function handleChange(event){
        const {name, value}=event.target;
        setNote(prevNotes => ({...prevNotes, [name]:value}) )
    }
    
    function addNote(event){
        event.preventDefault();
        setTodoList(prevTodoList => [...prevTodoList, note])
        setNote( 
            {text:"",
        isCompleted:false,
        id:uuid()} 
        )
    }

  const noteElements= todoList.map(note=>{
    return <Notes todo={note.text} 
                isCompleted={note.isCompleted} 
                id={note.id}
                key={note.id}
                changeTask={handleComplete}
                deleteTask={handleDelete}/>
  })

function handleComplete(id){
    setTodoList(prevTodoList=> prevTodoList.map(note=>{
        return note.id===id?{
            ...note,
            isCompleted: !note.isCompleted
        }:note
    }))

}

function handleDelete(id){
    setTodoList(prevTodoList=> prevTodoList.filter(note=>{
        return note.id!==id
    }))
}

const date= new Date();
// const day= date.toLocaleDateString('default', {day:'long'});
  return (
    <main>
        <h1>Todo List</h1>
    <div className='note-container'>
        <h5 className='date'>{`${date.toDateString()}`}</h5>
        <form>
            <input type="text" 
            name="text"
            placeholder='Things to get it done...'
            value={note.text}
            onChange={handleChange}
            />
            <button className="addNote"onClick={addNote}> <IoIosAddCircleOutline /> </button>
        </form>
        {noteElements}
    </div>
    </main>
   )

   
}

export default CreateNote