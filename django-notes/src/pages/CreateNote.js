import { useState } from "react"

const CreateNote = () => {
    const [note, setNote] = useState([])
    const createNote = async () => {
        const response = await fetch('/api/note/create/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    return (
        <div className="note">
            <div className="app-banner">
                <h3 className="app-name">Create Note</h3>
            </div>
            <div className="note-page-info">
                <form action="/">
                    <div className="input-group">
                        <textarea cols="30" rows="10" name="body" onChange={(e) => setNote({ ...note, 'body': e.target.value })}></textarea>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Create" onClick={createNote} />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateNote