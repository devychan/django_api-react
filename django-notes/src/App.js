import Header from "./components/Header"
import NotesList from "./pages/NotesList"
import CreateNote from './pages/CreateNote'
import { Routes, Route } from 'react-router-dom'
import Note from "./pages/Note"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="note/:id" element={<Note />} />
        <Route path="note/create" element={<CreateNote />} />
      </Routes>
    </div>
  )
}
export default App