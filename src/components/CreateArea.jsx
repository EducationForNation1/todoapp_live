import React from 'react'
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './createArea.css';

function CreateArea(props) {

    const [isExpanded, setExpand] = useState(false)
    const [note, setNote] = useState({
        title:"",
        content:"",
    })

    function hangleChange(event){
        // console.log(event.target)
        const {name,value} = event.target;
        setNote(prevNote => {
            return{
                ...prevNote,
                [name]:value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:'',
            content:'',
        });
        event.preventDefault();
    }

    function expand(){
        setExpand(true);
    }
  return (
    <div>
        <form className="create-note">
            {
                isExpanded && (
                    <input 
                    type="text"
                    name="title"
                    placeholder='Title'
                    onChange={hangleChange}
                    value={note.title}
                  />
                )
            }
           

            <textarea 
                name="content"
                rows={isExpanded ? 3 : 1}
                onClick={expand}
                placeholder='Take a note...'
                onChange={hangleChange} 
                value={note.content}
            />

            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>

        </form>
    </div>
  )
}

export default CreateArea;