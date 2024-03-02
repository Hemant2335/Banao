import { BrowserRouter, Route, Routes } from 'react-router-dom'
import   Blog  from './pages/Blog'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App