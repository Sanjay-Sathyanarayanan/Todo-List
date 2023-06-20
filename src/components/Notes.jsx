import React from 'react'
import { FaCheck } from 'react-icons/fa'
import {AiTwotoneDelete} from 'react-icons/ai'

const Notes = (props) => {


const decoration = props.isCompleted? "line-through":'none'
   const myStyles={
         textDecoration:decoration
    }

   
  return (
    <div className='notes' onClick={()=>props.changeTask(props.id)}>
        <h4 
        style={myStyles}>{props.todo}</h4>
        <div className='edit-buttons'>
        <button><FaCheck/> </button>
        <button onClick={()=>props.deleteTask(props.id)}> <AiTwotoneDelete /> </button>
        </div>
    </div>
  )
}

export default Notes