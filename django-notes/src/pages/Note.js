import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import '../assets/stylesheets/note.css'

const Note = () => {
    const { id } = useParams()
    const [note, setNote] = useState([])
    useEffect(() => {
        getNote()
    }, [])

    const getNote = async () => {
        const response = await fetch(`/api/note/${id}`)
        const data = await response.json()
        setNote(data)
    }
    const updateNote = async() => {
        const response = await fetch(`/api/note/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    const deleteNote = async() => {
        const response = await fetch(`/api/note/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    return (
        <div>
            {
                note ?
                    <div className="note">
                        <Link to='/' onClick={updateNote}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F6F6F6" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div className="app-banner">
                            <h3 className="app-name">
                                Note #{note.id}
                            </h3>
                            <Link to='/' onClick={deleteNote}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F6F6F6" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </Link>
                        </div>
                        <div key={note.id} className="note-page-info">
                            <form>
                                <div className="input-group">
                                    <textarea cols="30" rows="10" defaultValue={note.body} onChange={(e) => setNote({...note,'body':e.target.value})}></textarea>                                
                                </div>
                            </form>
                        </div>
                    </div>
                    : ''
            }
        </div>
    )
}
export default Note