import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import '../assets/stylesheets/notes.css'

const NotesList = () => {
    const [notes, setNotes] = useState([])
    useEffect(()=> {
        getNotes()
    }, [])
    const getDate = (date) => {
        return new Date(date).toLocaleDateString()
    }
    const getNotes = async() => {
        const response = await fetch('/api/notes')
        const data = await response.json()
        setNotes(data)
    }
    return (
        <div className="notes">
            <div className="app-banner">
                <h3 className="app-name">
                    <div>Notes</div>
                    <div>
                        you have {notes.length > 1 ? notes.length + ' notes' : notes.length + ' note'}
                    </div>
                </h3>
                <Link to="note/create" className="create">
                    <div>
                        Create
                    </div>                    
                </Link>
            </div>
            {
                notes.map((note,index) => (
                    <Link to={'note/' + (note.id)} key={(index+1)} >
                        <div className="note-page">
                            <div className="note-title">
                                Note #{index + 1}
                                <div>{getDate(note.created)}</div>
                            </div>
                            <div>
                                <p>{note.body && note.body.length > 40 ? note.body.slice(0,40) + '...' : note.body}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }            
        </div>
    )
}
export default NotesList