import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddHabit from './pages/AddHabit';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-habit" element={<AddHabit />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
